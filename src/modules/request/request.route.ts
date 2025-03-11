import { Router } from "express";
import { auth } from "../../middlewares/auth.middleware";
import { authorize } from "../../middlewares/authorize.middleware";
import {
  createRequestController,
  getLandlordRequestsController,
  getTenantRequestsController,
} from "./request.controller";

const requestRouter = Router();

requestRouter.post(
  "/create",
  auth,
  authorize(["tenant"]),
  createRequestController
);

requestRouter.get(
  "/tenant",
  auth,
  authorize(["tenant"]),
  getTenantRequestsController
);

requestRouter.get(
  "/landlord",
  auth,
  authorize(["landlord"]),
  getLandlordRequestsController
);

export default requestRouter;
