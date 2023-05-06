const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
  name: String,
  phone: String,
  address: String, 
  }, 
  {timestamps: true}
);


module.exports = new mongoose.model("User", userSchema);