import jwt from "jsonwebtoken";
import User from "../models/user.mjs";


// create a protected route by checking it you have an access token  that expires every 15 minutes
export const protectRoute = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;
        if (!accessToken) {
            return res.status(401).json({message: "Unauthorized please login"});
        }
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        // @ts-ignore
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({message: "user not found"});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
    }
}
export const adminRoute = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        return res.status(403).json({message: "Access Denied Admin Only"});
    }
}