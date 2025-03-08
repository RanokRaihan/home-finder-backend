import cors from "cors";
import express, { Application } from "express";
import { globalErrorHandler } from "./errors/globalErrorHandler";
import notFound from "./middlewares/notFound.middleware";
import router from "./routes";

//create the express app
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "server is running 🚀! Welcome to the API v1" });
});
app.use("/api/v1", router);

// global error handler
app.use(globalErrorHandler);

//not found route error handler
app.use(notFound);

export default app;
