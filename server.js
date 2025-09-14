const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Static routes for testing frontend
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/login", (req, res) => {
  // Simulate login
  res.json({ success: true, user: { id: 1, name: "Test User" } });
});

app.get("/products", (req, res) => {
  // Static product list
  res.json([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 200 },
  ]);
});

app.get("/cart", (req, res) => {
  res.json([{ id: 1, name: "Laptop", price: 1200, quantity: 1 }]);
});

app.get("/payment", (req, res) => {
  res.json({ success: true, message: "Payment processed successfully" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
