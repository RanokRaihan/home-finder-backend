import { Request, Response } from "express";
import { SignOptions } from "jsonwebtoken";
import {
  jwt_access_expires_in,
  jwt_access_secret,
  jwt_refresh_expires_in,
  jwt_refresh_secret,
  node_env,
} from "../../config";
import ApiError from "../../errors/ApiError";
import asyncHandler from "../../utils/asyncHandler";
import { createToken } from "../../utils/createToken";
import { sendResponse } from "../../utils/sendResponse";
import { findUserByEmail } from "../user/user.service";
import { IjwtPayload } from "./auth.interface";

export const loginController = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user?._id) {
      throw new ApiError(400, "Invalid login credentials!");
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
      throw new ApiError(400, "Invalid login credentials!");
    }

    const jwtPayload: IjwtPayload = {
      _id: user._id?.toString(),
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    };

    const accessToken = createToken(
      jwtPayload,
      jwt_access_secret as string,
      jwt_access_expires_in as SignOptions["expiresIn"]
    );
    const refreshToken = createToken(
      jwtPayload,
      jwt_refresh_secret as string,
      jwt_refresh_expires_in as SignOptions["expiresIn"]
    );

    res.cookie("refreshToken", refreshToken, {
      secure: node_env === "production",
      httpOnly: true,
      sameSite: node_env === "production" ? "none" : "lax",
      maxAge: 1000 * 60 * 60 * 24 * 365,
      path: "/",
    });
    sendResponse(res, 200, "Login Successfull", { token: accessToken });
  }
);
