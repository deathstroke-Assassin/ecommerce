import express from "express";
import { addToCart, getCartProducts, reomveAllfromCart, updateQuantity } from "../controllers/cart.controllers.mjs";
import { protectRoute } from "../middleware/auth.middleware.mjs";

const router = express.Router();

router.get("/",protectRoute, getCartProducts)
router.post("/",protectRoute, addToCart)
router.delete("/",protectRoute, reomveAllfromCart)
router.put("/:id",protectRoute, updateQuantity)

export default router