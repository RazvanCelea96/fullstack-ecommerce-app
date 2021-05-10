import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);

//to implement middlware you just put it as first argument -vezi mai jos
router.route("/profile").get(protect, getUserProfile);

export default router;
