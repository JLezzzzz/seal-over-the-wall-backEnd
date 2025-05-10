import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import mongoose from "mongoose"
import cookieParser from "cookie-parser";
import allRoutes from './routes/allRoutes.js'




dotenv.config()
const PORT = process.env.PORT || 3000 

const app = express();
app.use(cors());
app.use(cookieParser()); 
app.use(express.json()); 


app.use(allRoutes)
app.use('/uploads', express.static('uploads'));

;(async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to Mongo database ✅");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT} ✅`)
        })
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    }
})()
