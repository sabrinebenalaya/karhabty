const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  ref: { required: true, type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
  agence: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  status: { required: true, type: String },
});

module.exports = mongoose.model("Order", orderSchema);
const mongoose = require("mongoose");
