const mongoose = require("mongoose");
const announcementSchema = mongoose.Schema({
  description: { required: true, type: String },
  titre: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
  agence: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Announcement", announcementSchema);
