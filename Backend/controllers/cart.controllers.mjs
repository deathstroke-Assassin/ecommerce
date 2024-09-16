import Product from "../models/product.mjs";

export const getCartProducts = async (req, res) => {
    try {
        const products = await Product.find({ _id: { $in: req.user.cartItems } });
        const cartItems = products.map((product) => {
            const cartItem = req.user.cartItems.find((cartItems) => cartItems.id === product._id);
            return {...product.toJSON(), quantity:cartItem.quantity};
        })
        res.json(cartItems);
    } catch (error) {
        console.log("Error in getCartProducts controller", error.message);
        res.status(500).json({message: "Server Error"});
    }
}


export const addToCart = async (req, res) => {
    try {
        const {productId} = req.body;
        const user = req.user
        const existingItem = user.cartItems.find(item => item.id === productId);
        if(existingItem) {
            existingItem.quantity += 1;
        }
        else {
            user.cartItems.push({productId});
        }
    
    await user.save();
    res.json(user.cartItems);
    } catch {
        console.log("Error in addToCart controller")
        res.status(500).json({message: "Server Error"});
    }
}

export const reomveAllfromCart = async (req, res) => {
    try {
        const productId = req.body
        const user = req.user
        if (!productId) {
            user.cartItems = [];
        } else {
            user.cartItems = user.cartItems.filter(item => item.id !== productId);
        }
        await user.save();
        res.json(user.cartItems);
    } catch {
        console.log("Error in reomveAllfromCart controller")
        res.status(500).json({message: "Server Error"});
    }
}

export const updateQuantity = async (req, res) => {
    try {
        const {id:productId} = req.params
        const {quantity} = req.body
        const user = req.user
        const existingItem = user.cartItems.find(item => item.id === productId);
        if(existingItem) {
            if (quantity === 0) {
                user.cartItems = user.cartItems.filter(item => item.id !== productId)
                await user.save();
                return res.json(user.cartItems);
            }

            existingItem.quantity = quantity
            await user.save();  
        res.json(user.cartItems);
        } else {
            res.status(404).json({message: "Product not found"})}  
    } catch {
        console.log("Error in updateQuantity controller")
        res.status(500).json({message: "Server Error"});
    }}