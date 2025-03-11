import { model, Schema } from "mongoose";
import { IRequest } from "./request.interface";

const requestSchema = new Schema<IRequest>(
  {
    listingId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    tenantId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    landlordId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    tenantName: {
      type: String,
      required: true,
    },
    tenantType: {
      type: String,
      enum: ["family", "bachelor", "couple"],
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
    tenantMessage: { type: String },
    landlordMessage: { type: String },
    paymentStatus: { type: String, enum: ["pending", "paid"] },
    paymentId: { type: String },
    paymentDate: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Request = model<IRequest>("Request", requestSchema);

export default Request;
