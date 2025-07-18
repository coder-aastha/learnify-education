import express from "express";
import { getUserProfile, login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";
import { createLecture } from "../controllers/course.controller.js";

const router = express.Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/profile").get(isAuthenticated, getUserProfile)
router.route("/profile/update").put(isAuthenticated, upload.single("profilePhoto"), updateProfile)
router.route("/:courseId/lecture").post(isAuthenticated, createLecture);

export default router;