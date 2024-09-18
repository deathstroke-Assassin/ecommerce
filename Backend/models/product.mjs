import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name required"]},
    price: {type: Number, min: 0, required: [true, "Price required"]},
    rating: {type: Number, min: 0, required: [false, "Rating is not required"]},
    description: {type: String, required: [true, "Description required"]},
    image: {type: String, required: [true, "Image required"]},
   
    category: {type: String, required: [true, "Category required"]},
    isFeatured: {type: Boolean, default: false},
},{timestamps: true,});

const Product = mongoose.model("Product", productSchema);
export default Product