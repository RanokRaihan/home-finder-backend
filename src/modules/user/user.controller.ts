import { Request, Response } from "express";
import ApiError from "../../errors/ApiError";
import asyncHandler from "../../utils/asyncHandler";
import { sendResponse } from "../../utils/sendResponse";
import { findUserByEmail, registerUserService } from "./user.service";

export const registerUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body;
    const existingUser = await findUserByEmail(data.email);
    if (existingUser?._id) {
      throw new ApiError(400, "User already exist with this email!", "email");
    }
    const user = await registerUserService(data);
    if (!user?._id) {
      throw new ApiError(500, "User registration failed!");
    }
    user.password = "";

    sendResponse(res, 201, "User registered Successfully!", user);
  }
);
