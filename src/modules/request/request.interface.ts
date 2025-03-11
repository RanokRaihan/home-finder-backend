import { ObjectId } from "mongoose";

export interface IRequest {
  listingId: ObjectId;
  tenantId: ObjectId;
  tenantName: string;
  landlordId: ObjectId;
  tenantType: "family" | "bachelor" | "couple";
  status: "pending" | "approved" | "rejected";
  moveInDate: Date;
  landlordContact?: string;
  tenantContact: string;
  tenantMessage?: string;
  landlordMessage?: string;
  paymentStatus?: "pending" | "paid";
  paymentId?: string;
  paymentDate?: Date;
}
