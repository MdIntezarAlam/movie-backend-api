import express from "express";
import {
  getAllUser,
  loginUser,
  signupUser,
} from "../controller/userController.js";

const router = express.Router();

router.route("/").get(getAllUser);
router.route("/register").post(signupUser);
router.route("/login").post(loginUser);

export default router;
