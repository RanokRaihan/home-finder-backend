import jwt, { JwtPayload } from "jsonwebtoken";
import ApiError from "../errors/ApiError";

export const verifyToken = (token: string, secret: string): JwtPayload => {
  const decoded = jwt.verify(token, secret);
  if (typeof decoded === "string") {
    throw new ApiError(400, "Invalid token");
  }
  return decoded;
};
