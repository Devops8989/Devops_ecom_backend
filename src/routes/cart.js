const express = require("express");
const router = express.Router();

// Mock cart endpoint (in real apps, use session or DB)
router.post("/checkout", (req, res) => {
  const { cartItems } = req.body;
  if (!cartItems || !cartItems.length) {
    return res.status(400).json({ success: false, message: "Cart is empty" });
  }
  res.json({ success: true, message: "Payment processed (mock)" });
});

module.exports = router;

