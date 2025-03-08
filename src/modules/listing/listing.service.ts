import { IListing } from "./listing.interface";
import Listing from "./listing.model";

export const createListingService = async (listing: IListing) => {
  try {
    const newListing = new Listing(listing);
    return await newListing.save();
  } catch (error) {
    throw error;
  }
};

export const getListingService = async (listingId: string) => {
  try {
    return await Listing.findById(listingId).populate("landlord", "name email");
  } catch (error) {
    throw error;
  }
};

export const updateListingService = async (
  listingId: string,
  listing: IListing
) => {
  try {
    return await Listing.findByIdAndUpdate(listingId, listing, { new: true });
  } catch (error) {
    throw error;
  }
};

export const deleteListingService = async (listingId: string) => {
  try {
    return await Listing.findByIdAndDelete(listingId);
  } catch (error) {
    throw error;
  }
};

export const getAllListingsService = async () => {
  try {
    return await Listing.find().populate("landlord", "_id name email");
  } catch (error) {
    throw error;
  }
};
