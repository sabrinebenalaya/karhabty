const mongoose = require("mongoose");
const carSchema = mongoose.Schema({
  brand: { required: true, type: String },
  model: { type: String, required: true },
  anne: { required: true, type: Number },
  color: { required: true, type: String },
  typeFuel: { type: String, required: true },
  photo: { required: true, type: String },
  address: {
    city: { type: String, required: true },
    governorate: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true }
  },
  price: { required: true, type: Number },
  availableDates:{
    startDate:{ type: Date, default: Date.now },
    endDate:{ type: Date, default: Date.now }
  }
});

module.exports = mongoose.model("Car", carSchema);
