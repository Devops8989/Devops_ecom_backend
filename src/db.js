const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is not set");
  }
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri, {
    // keep defaults simple for dev; tune for prod as needed
  });
  console.log("✅ Connected to MongoDB");
};

module.exports = connectDB;
