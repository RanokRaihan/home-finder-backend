import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";
import { Role } from "../types";

export const authorize = (roles: Role[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) {
      throw new ApiError(401, "Unauthorized access!");
    }

    if (!roles.includes(user.role)) {
      throw new ApiError(403, "Forbidden access!");
    }

    next();
  };
};
