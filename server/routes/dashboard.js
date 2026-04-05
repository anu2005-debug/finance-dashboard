import express from "express";
import KPI from "../models.js";
import Product from "../models/Product.js";
import Transaction from "../models/Transaction.js";

const router = express.Router();

/* GET DASHBOARD DATA */
router.get("/", async (req, res) => {
  try {
    const kpi = await KPI.find();
    const product = await Product.find();
    const transaction = await Transaction.find();

    res.json({
      kpi,
      product,
      transaction
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;