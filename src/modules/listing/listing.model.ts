import { model, Schema } from "mongoose";
import { IListing } from "./listing.interface";

const listingSchema = new Schema<IListing>({
  landlord: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  rent: { type: Number, required: true },
  location: { type: String, required: true },
  status: {
    type: String,
    enum: ["available", "rented", "unavailable"],
    default: "available",
  },
  type: { type: String, enum: ["apartment", "house"], required: true },
  furnished: {
    type: String,
    enum: ["furnished", "semi-furnished", "unfurnished"],
    required: true,
  },
  condition: {
    type: String,
    enum: ["new", "old", "renovated"],
    required: true,
  },
  bedroom: { type: Number, required: true },
  bathroom: { type: Number, required: true },
  kitchen: { type: Number, required: true },
  size: { type: Number, required: true },
  images: { type: [String], required: true },
});

const Listing = model<IListing>("Listing", listingSchema);

export default Listing;
