import { Router } from "express";
import authRouter from "../modules/auth/auth.route";
import userRouter from "../modules/user/user.route";

const router = Router();

const routes = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
];

routes.forEach((el) => {
  router.use(el.path, el.route);
});

export default router;
