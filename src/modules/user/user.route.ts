import { Router } from "express";
import validateRequest from "../../middlewares/validate.middleware";
import { registerUserController } from "./user.controller";
import { registerUserSchema } from "./user.validation";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("this is get user router test");
});

userRouter.post(
  "/register",
  validateRequest(registerUserSchema),
  registerUserController
);

export default userRouter;
