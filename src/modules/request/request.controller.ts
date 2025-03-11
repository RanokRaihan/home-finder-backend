import { Request, Response } from "express";
import ApiError from "../../errors/ApiError";
import asyncHandler from "../../utils/asyncHandler";
import { sendResponse } from "../../utils/sendResponse";
import { getListingByIdService } from "../listing/listing.service";
import {
  createRequestService,
  getLandlordRequestsService,
  getTenantRequestsService,
} from "./request.service";

export const createRequestController = asyncHandler(
  async (req: Request, res: Response) => {
    const payload = { ...req.body };
    payload.tenantId = req.user._id;
    const listing = await getListingByIdService(payload.listingId);
    if (!listing) {
      throw new ApiError(404, "Listing not found");
    }
    payload.tenantName = req.user.firstName + " " + req.user.lastName;
    payload.landlordId = listing.landlord;
    const newRequest = await createRequestService(payload);
    sendResponse(res, 201, "New request added successfully", newRequest);
  }
);

export const getTenantRequestsController = asyncHandler(
  async (req: Request, res: Response) => {
    const tenantId = req.user._id;
    const requests = await getTenantRequestsService(tenantId);
    sendResponse(res, 200, "Requests retrieved successfully", requests);
  }
);

export const getLandlordRequestsController = asyncHandler(
  async (req: Request, res: Response) => {
    const landlordId = req.user._id;
    const requests = await getLandlordRequestsService(landlordId);
    sendResponse(res, 200, "Requests retrieved successfully", requests);
  }
);
