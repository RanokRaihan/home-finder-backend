import { Router } from "express";
import authRouter from "../modules/auth/auth.route";
import listingRouter from "../modules/listing/listing.route";
import requestRouter from "../modules/request/request.route";
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
  {
    path: "/listing",
    route: listingRouter,
  },
  {
    path: "/request",
    route: requestRouter,
  },
];

routes.forEach((el) => {
  router.use(el.path, el.route);
});

export default router;
