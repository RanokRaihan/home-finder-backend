import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";
import asyncHandler from "../utils/asyncHandler";

export const parseBody = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("parseBody");
    if (!req.body.data) {
      throw new ApiError(400, "Please provide data in the body under data key");
    }
    try {
      const data = JSON.parse(req.body.data);
      req.body = data;
    } catch (error) {
      throw new ApiError(400, "Invalid JSON data");
    }

    next();
  }
);
