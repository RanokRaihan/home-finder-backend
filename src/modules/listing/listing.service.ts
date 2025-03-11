import QueryBuilder from "../../builder/queryBuilder";
import {
  listingFilterableFields,
  listingSearchableFields,
} from "./listing.constant";
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

export const getAllListingsService = async (query: Record<string, unknown>) => {
  try {
    const listingQuery = new QueryBuilder(
      Listing.find().populate("landlord", "_id firstName lastName email"),
      query
    )
      .search(listingSearchableFields)
      .filter(listingFilterableFields)
      .sort()
      .paginate();
    const result = await listingQuery.modelQuery;
    const meta = await listingQuery.countTotal();
    return { result, meta };
  } catch (error) {
    throw error;
  }
};
export const getListingByIdService = async (listingId: string) => {
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
