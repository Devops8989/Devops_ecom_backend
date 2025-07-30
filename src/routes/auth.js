const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email } = req.body;
  if (email) return res.json({ success: true, user: { email } });
  res.status(400).json({ success: false, message: "Email required" });
});

module.exports = router;
