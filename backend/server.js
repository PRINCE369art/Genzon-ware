import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();
const app = express();

app.post("/product", (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "please provide all fields" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in create product:", error, error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
});



app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
});


