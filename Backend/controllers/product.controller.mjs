import { redis } from "../lib/redis.mjs";
import Product from "../models/product.mjs";
import cloudinary from "../lib/cloudinary.mjs";
export const getAllProducts = async (req, res) => {
try {
    const products = await Product.find({});
    res.json({products});
} catch (error) {
    console.log("Error in getAllProducts controller", error.message)
    res.status(500).json({message:"Server Error", error: error.message})
}
};

export const getFeaturedProducts = async (req, res) => {
    try {
        let featuredProducts = await redis.get("featured_products");
        if (featuredProducts) {
            return res.json({products: JSON.parse(featuredProducts)});
        }


        // the lean function returns a plain JavaScript object instead of a mongoose model
        // faster
        featuredProducts = await Product.find({isFeatured: true}).lean();
        if (!featuredProducts) {
            return res.status(404).json({message: "No featured products found"});
        }
        await redis.set("featured_products", JSON.stringify(featuredProducts));
        res.json({featuredProducts});
    } catch (error) {
        console.log("Error in getFeaturedProducts controller", error.message)
        res.status(500).json({message:"Server Error", error: error.message})
    }
}

export const createProduct = async (req, res) => {
    try {
        const {name, price, description, image, category, isFeatured} = req.body;
        let cloudinaryResponse = null
        if (image) {
            cloudinaryResponse = await cloudinary.uploader.upload(image, {folder:"products"});
        }
        const product = await Product.create({
            name, price, description,
            image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "" ,
            category,
            isFeatured});
        res.status(201).json({product});
    } catch (error) {
        console.log("Error in createProduct controller", error.message)
        res.status(500).json({message:"Server Error", error: error.message})
    }}

    export const deleteProduct = async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({message: "Product not found"});
            }
            if (product.image) {
                const publicId = product.image.split("/").pop().split(".")[0]; // get the image id to be able to delete it
                await cloudinary.uploader.destroy(`products/${publicId}`);
                res.json({message: "Product deleted successfully"});
            }
            await Product.findByIdAndDelete(req.params.id);
            res.json({message: "Product deleted successfully"});
        } catch (error) {
            console.log("Error in deleteProduct controller", error.message)     
            res.status(500).json({message:"Server Error", error: error.message})
        }
    }

    export const getRecommendedProducts = async (req, res) => {
        try {
            const products = await Product.aggregate([
                {$sample: {size: 4}},
                {$match: {isFeatured: true}},
                {$project: {_id: 1, name: 1, price: 1, image: 1, description:1}}
            ])
            res.json({products});
        } catch (error) {
            console.log("Error in getRecommendedProducts controller", error.message)
            res.status(500).json({message:"Server Error", error: error.message})
        }
    }

    export const getProductsBycategory = async (req, res) => {
        const {category} = req.params
        try {
            const products = await Product.find({category});
            res.json({products});
        } catch (error) {
            console.log("Error in getProductsBycategory controller", error.message)
            res.status(500).json({message:"Server Error", error: error.message})
        }
    }

    export const toggleFeaturedProducts = async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (product) {
                product.isFeatured = !product.isFeatured;
                const updatedProduct = await product.save();
                await updateFeaturedProductsCache();  
                res.json({product: updatedProduct});
            } else {
                return res.status(404).json({message: "Product not found"});
            }
            res.json({message: "Product updated successfully"});
        } catch (error) {
            console.log("Error in toggleFeaturedProducts controller", error.message)
            res.status(500).json({message:"Server Error", error: error.message})
        }
    }
    async function updateFeaturedProductsCache() {
        try {
            const featuredProducts = await Product.find({isFeatured: true}).lean();
            await redis.set("featured_products", JSON.stringify(featuredProducts));
        } catch (error) {
            console.log("Error in updateFeaturedProductsCache controller", error.message)
        }
    }