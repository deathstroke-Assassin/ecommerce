
import mongoose from "mongoose";
import product from "../src/api/product/controllers/product.js";
import bcrypt from 'bcryptjs';


const UserSchema = new mongoose.Schema({
    name: {type: String ,
        required: [true, "UserName required"]},
    
    email: {type: String, required: [true, "E-Maail required"],
        trim: true, unique: true, lowercase: true,
    },
    password: {type: String, required: [true, "Password required"], minlenght: [6, "password must be atleast 6 Characters"]},
    cartItems: [{
        quantity: {type: Number, default: 1},
        product: {type: mongoose.Schema.Types.ObjectId, ref: "Product"}
    }] ,
    role: {type: String, enum: ["customer", "admin"], default: "customer"}
}, 
{timestamps: true,} // to have createdAt and updated At
)



// pre save hook to hash password to database
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {return next}
    else {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password =await bcrypt.hash(this.password, salt);
            next();
        } catch (error) {
            next(error)
        }
    }
})

UserSchema.methods.comparePassword = async function (password) {
    return (bcrypt.compare(password, this.password))
}
const User = mongoose.model("User",UserSchema);
export default User