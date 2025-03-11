import { UploadApiResponse } from "cloudinary";
import fs from "fs";
import { cloudinaryUpload } from "../config/cloudinary.config";
export const sendImageToCloudinary = (
  imageName: string,
  path: string
): Promise<Record<string, unknown>> => {
  return new Promise((resolve, reject) => {
    cloudinaryUpload.uploader.upload(
      path,
      { public_id: imageName.trim(), folder: "home-finder" },
      function (error, result) {
        if (error) {
          reject(error);
        }
        resolve(result as UploadApiResponse);
        // delete a file asynchronously
        fs.unlink(path, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("File is deleted.");
          }
        });
      }
    );
  });
};
