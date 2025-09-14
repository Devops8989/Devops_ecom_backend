const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req,res)=>{
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if(!user) return res.status(401).json({ message: "Invalid credentials" });
  // demo returns user object. In prod return JWT.
  res.json({ _id: user._id, email: user.email, name: user.name });
});

module.exports = router;
