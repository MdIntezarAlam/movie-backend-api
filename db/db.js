import mongoose from "mongoose";

const DB_URL = "mongodb://127.0.0.1:27017/youtube-app";
const connectDB = async () => {
  try {
    mongoose.connect(DB_URL);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
