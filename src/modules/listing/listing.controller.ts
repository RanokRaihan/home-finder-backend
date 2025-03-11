import { Request, Response } from "express";
import ApiError from "../../errors/ApiError";
import asyncHandler from "../../utils/asyncHandler";
import { sendImageToCloudinary } from "../../utils/cloudinaryUpload";
import { sendResponse } from "../../utils/sendResponse";
import { createListingService, getAllListingsService } from "./listing.service";

export const createListingController = asyncHandler(
  async (req: Request, res: Response) => {
    const payload = { ...req.body };
    payload.landlord = req.user._id;
    const images = req.files as Express.Multer.File[];
    const imageUrls = [];
    console.log(images);
    if (!req.files) {
      throw new ApiError(400, "Please provide images");
    }
    for (const image of images) {
      try {
        const { secure_url } = await sendImageToCloudinary(
          image?.filename,
          image.path
        );
        imageUrls.push(secure_url);
      } catch (error) {
        throw new ApiError(400, "Image upload failed  " + error);
      }
    }
    payload.images = imageUrls;
    const newListing = await createListingService(payload);
    sendResponse(res, 201, "New listing added successfully", newListing);
  }
);

export const getAllListingsController = asyncHandler(
  async (req: Request, res: Response) => {
    const query = req.query;
    const listings = await getAllListingsService(query);
    sendResponse(res, 200, "Listings retrieved successfully", listings);
  }
);
