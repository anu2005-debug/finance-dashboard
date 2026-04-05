import express from "express";
import KPI from "../models.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;