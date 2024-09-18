import express from "express";
import dotenv from  "dotenv";
import authRoutes from "./routes/auth.route.mjs";
import cartRoutes from "./routes/cart.route.mjs";
import productRoutes from "./routes/product.route.mjs";
import connectDB from "./lib/db.mjs";
import cookieParser from "cookie-parser";
import cors from "cors";
import Product from "./models/product.mjs";

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    optionSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "FETCH", "put", "delete", "fetch", "patch", "get"],
    allowedHeaders: ["Content-Type", "Authorization"],

  };
  
  app.use(cors(corsOptions));
  
  app.use(express.json({ limit: "50mb" })); // Increased limit
  app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })); // Increased limit
  app.use(cookieParser());

app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).send({ message: 'Product deleted successfully' });
  } catch (error) {
    console.log("Error in deleteProduct controller", error.message)
    res.status(500).json({message:"Server Error", error: error.message})
  }
});


app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)
app.use("/api/cart", cartRoutes)


app.listen(5000, () => {
    console.log("listening on Port: ", PORT);
    connectDB();
})