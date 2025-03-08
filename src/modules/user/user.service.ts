import ApiError from "../../errors/ApiError";
import { IUser } from "./user.interface";
import User from "./user.model";

export const registerUserService = async (data: IUser) => {
  try {
    const user = await User.create(data);
    if (!user?._id) {
      throw new ApiError(500, "User registration failed");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

export const findUserByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
};
