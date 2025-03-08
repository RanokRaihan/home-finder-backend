import mongoose from "mongoose";
import { DB_NAME } from "../constants";
import { mongodb_uri } from "./index";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${mongodb_uri}/${DB_NAME}`
    );
    console.log(
      `\n Mongodb connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connection error: ", error);
    process.exit(1);
  }
};
