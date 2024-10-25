import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  confirmPassword: { type: String },
});

const User = new mongoose.model("User", userSchema);

export default User;
