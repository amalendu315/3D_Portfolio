import { app } from "./app.js";
import { connectToDB } from "./config/database.js";
import * as dotenv from "dotenv";
import cloudinary from "cloudinary";

dotenv.config({ path: "./backend/config/config.env" });

connectToDB();

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
})