import mongoose from "mongoose";

export const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URI, {}).then((c) => {
        console.log(`MongoDB connected to: ${c.connection.host}`);
    }).catch((err) => {
        console.log(err);
    });
}