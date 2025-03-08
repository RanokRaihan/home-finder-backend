import { Schema } from "mongoose";

export interface IListing {
  landlord: Schema.Types.ObjectId;
  title: string;
  description: string;
  rent: number;
  location: string;
  status: "available" | "rented" | "unavailable";
  type: "apartment" | "house";
  furnished: "furnished" | "semi-furnished" | "unfurnished";
  condition: "new" | "old" | "renovated";
  bedroom: number;
  bathroom: number;
  kitchen: number;
  size: number;
  images: string[];
}
