import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id }).select("-password -email");
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message,
        })
    }
}