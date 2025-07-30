const router = require("express").Router();
const Product = require("../models/Product");

// GET /api/products
router.get("/", async (_req, res) => {
  const items = await Product.find().lean();
  res.json(items);
});

// POST /api/products  { "name": "A", "price": 100 }
router.post("/", async (req, res) => {
  const { name, price } = req.body;
  if (!name || price == null) {
    return res.status(400).json({ message: "name and price are required" });
  }
  const created = await Product.create({ name, price });
  res.status(201).json(created);
});

// Seed endpoint (optional)  POST /api/products/seed
router.post("/seed", async (_req, res) => {
  const payload = [
    { name: "Product A", price: 100 },
    { name: "Product B", price: 150 },
    { name: "Product C", price: 200 },
  ];
  await Product.deleteMany({});
  const out = await Product.insertMany(payload);
  res.json(out);
});

module.exports = router;
