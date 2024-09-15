import express from "express";
import { signup, login, logout, refreshToken, getProfile } from "../controllers/auth.controller.mjs";
import { protectRoute } from "../middleware/auth.middleware.mjs";

const router = express.Router();

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)
router.post("/refreshToken", refreshToken)
router.get("/profile", protectRoute, getProfile);
export default router