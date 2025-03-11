import { IRequest } from "./request.interface";
import Request from "./request.model";

export const createRequestService = async (request: IRequest) => {
  try {
    const newRequest = new Request(request);
    await newRequest.save();
    return newRequest;
  } catch (error) {
    throw error;
  }
};

export const getTenantRequestsService = async (tenantId: string) => {
  try {
    return await Request.find({ tenantId });
  } catch (error) {
    throw error;
  }
};
export const getLandlordRequestsService = async (landlordId: string) => {
  try {
    return await Request.find({ landlordId });
  } catch (error) {
    throw error;
  }
};

export const getRequestByIdService = async (requestId: string) => {
  try {
    return await Request.findById(requestId);
  } catch (error) {
    throw error;
  }
};
