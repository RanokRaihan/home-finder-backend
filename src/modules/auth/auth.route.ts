import { Router } from "express";
import validateRequest from "../../middlewares/validate.middleware";
import { loginController } from "./auth.controller";
import { loginValidationSchema } from "./auth.validation";

const authRouter = Router();

authRouter.post(
  "/login",
  validateRequest(loginValidationSchema),
  loginController
);

export default authRouter;
