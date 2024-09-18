import express from "express";
import { createProduct, deleteProduct, getAllProducts, getFeaturedProducts, getProductsBycategory, getRecommendedProducts, toggleFeaturedProducts } from "../controllers/product.controller.mjs";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.mjs";
const router = express.Router();

router.get("/",  getAllProducts)
router.get("/featured", getFeaturedProducts)
router.get("/recommendations", getRecommendedProducts)
router.post("/", protectRoute, adminRoute, createProduct)
router.post("/:id", protectRoute, adminRoute, deleteProduct)
router.get("/category/:category", getProductsBycategory)
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProducts)


export default router