const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  ref: { required: true, type: String },

  date: { required: true, type: Number, default: new Date() },

  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },

  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  
  status: { required: true, type: Number },
});

module.exports = mongoose.model("Order", orderSchema);
