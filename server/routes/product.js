import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;