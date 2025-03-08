import { ObjectId } from "mongoose";

export interface IRequest {
  listingId: ObjectId;
  tenantId: ObjectId;
  status: "pending" | "approved" | "rejected";
  moveInDate: Date;
  landlordContact?: string;
  tenantContact: string;
  message?: string;
  paymentStatus?: "pending" | "paid";
  paymentId?: string;
  paymentDate?: Date;
}
