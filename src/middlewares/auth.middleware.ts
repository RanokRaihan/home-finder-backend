import { NextFunction, Request, Response } from "express";
import { jwt_access_secret } from "../config";
import ApiError from "../errors/ApiError";
import asyncHandler from "../utils/asyncHandler";
import { verifyToken } from "../utils/verifyToken";

export const auth = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization");
    if (!token) {
      throw new ApiError(401, "Unauthorized access!");
    }
    try {
      const user = verifyToken(token, jwt_access_secret as string);
      req.user = user;
      next();
    } catch (error) {
      throw new ApiError(401, "Unauthorized access!");
    }
  }
);
