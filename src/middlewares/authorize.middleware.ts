import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";
import { Role } from "../types";

export const authorize = (roles: Role[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      console.log({ user });
      console.log({ roles });
      if (!user) {
        throw new ApiError(401, "Unauthorized access!");
      }

      if (!roles.includes(user.role)) {
        throw new ApiError(401, "Forbidden access!");
      }
      console.log("role authorized");
      next();
    } catch (error) {
      next(error);
    }
  };
};
