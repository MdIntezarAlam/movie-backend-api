import express from "express";
import { getMovie, postMovie } from "../controller/movieController.js";

const router = express.Router();

router.route("/movie").get(getMovie);
router.route("/movie").post(postMovie);

export default router;
