const mongoose = require("mongoose");
const announcementSchema = mongoose.Schema({
  price: { required: true, type: Number },
  securityDeposit: { required: true, type: Number },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  status: { type: String, enum: ["active", "inactive"], required: true },
  titre: { type: String, required: true },
  description: { required: true, type: String },
  availableDates: {
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
  },
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true, unique:true },
  agence: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Announcement", announcementSchema);
