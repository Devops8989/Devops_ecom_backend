const mongoose = require("mongoose");
module.exports = async function (uri) {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Mongo connected");
};
