const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  password: String, // plaintext for demo only — use bcrypt in prod
  name: String,
});
module.exports = mongoose.model("User", UserSchema);
