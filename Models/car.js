const mongoose = require("mongoose");
const carSchema = mongoose.Schema({
  brand: { required: true, type: String },

  anne: { required: true, type: Number },

  color: { required: true, type: String },

  photo: { required: true, type: String },
  price: { required: true, type: Number },
  adress: { required: true, type: String },
});

module.exports = mongoose.model("Car", carSchema);
