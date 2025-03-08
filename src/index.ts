import app from "./app";
import { port } from "./config";
import { connectDB } from "./config/db";

connectDB()
  .then(() => {
    app.listen(port || 8000, () => {
      console.log("server is running in 8000 port");
    });
  })
  .catch((error) => {
    console.log("DATABASE Connection failed: ", error);
  });
