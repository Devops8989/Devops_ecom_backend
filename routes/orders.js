const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req,res)=>{
  const { userId, items } = req.body;
  if(!items || items.length===0) return res.status(400).json({ message: "No items" });
  const order = await Order.create({ userId, items });
  res.json(order);
});

module.exports = router;
