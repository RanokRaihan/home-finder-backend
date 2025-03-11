import { Router } from "express";

import { upload } from "../../config/multer.config";
import { auth } from "../../middlewares/auth.middleware";
import { authorize } from "../../middlewares/authorize.middleware";
import { parseBody } from "../../middlewares/bodyParser.middleware";
import validateRequest from "../../middlewares/validate.middleware";
import {
  createListingController,
  getAllListingsController,
} from "./listing.controller";
import listingValidationSchema from "./listing.validation";

const listingRouter = Router();

listingRouter.post(
  "/create",
  auth,
  authorize(["landlord"]),
  upload.array("images"),
  parseBody,
  validateRequest(listingValidationSchema),
  createListingController
);

listingRouter.get("/", getAllListingsController);

export default listingRouter;
