import express from "express";
import cors from "cors";
import movieRoute from "./router/movieRoute.js";
import userRoute from "./router/userRouter.js";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config({
  path: "config/.env",
});

app.use("/api/youtube", movieRoute);
app.use("/api/youtube/auth", userRoute);

app.listen(process.env.LOCAL_PORT, () => {
  console.log(`server is listning on ${process.env.LOCAL_PORT}`);
});

connectDB();
