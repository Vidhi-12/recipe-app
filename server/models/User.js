
const mongoose = require("mongoose");
ObjectId = mongoose.Schema.ObjectId;
const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true }
});
module.exports = mongoose.model("User", userSchema);