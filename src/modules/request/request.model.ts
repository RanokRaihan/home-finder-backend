import { model, Schema } from "mongoose";
import { IRequest } from "./request.interface";

const requestSchema = new Schema<IRequest>({
  listingId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  tenantId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  moveInDate: {
    type: Date,
    required: true,
  },
  landlordContact: { type: String },
  tenantContact: { type: String, required: true },
  message: { type: String },
  paymentStatus: { type: String, enum: ["pending", "paid"] },
  paymentId: { type: String },
  paymentDate: { type: Date },
});

const Request = model<IRequest>("Request", requestSchema);

export default Request;
