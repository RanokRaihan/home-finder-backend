import dotenv from "dotenv";
dotenv.config();
// export environment variables
export const {
  MONGODB_URI: mongodb_uri,
  PORT: port,
  NODE_ENV: node_env,
  JWT_ACCESS_SECRET: jwt_access_secret,
  JWT_ACCESS_EXPIRES_IN: jwt_access_expires_in,
  JWT_REFRESH_SECRET: jwt_refresh_secret,
  JWT_REFRESH_EXPIRES_IN: jwt_refresh_expires_in,
  CLOUDINARY_CLOUD_NAME: cloudinary_cloud_name,
  CLOUDINARY_API_KEY: cloudinary_api_key,
  CLOUDINARY_API_SECRET: cloudinary_api_secret,
} = process.env;
