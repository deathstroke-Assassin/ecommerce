import express from "express";
import { createProduct, deleteProduct, getAllProducts, getFeaturedProducts, getProductsBycategory, getRecommendedProducts, searchProducts, toggleFeaturedProducts } from "../controllers/product.controller.mjs";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.mjs";
const router = express.Router();

router.get("/",  getAllProducts)
router.get("/featured", getFeaturedProducts)
router.get("/recommendations", getRecommendedProducts)
router.get("/search", searchProducts) // This route will handle search queries
router.get("/category/:category", getProductsBycategory)
router.post("/", protectRoute, adminRoute, createProduct)
router.delete("/:id", protectRoute, adminRoute, deleteProduct)
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProducts)

export default router