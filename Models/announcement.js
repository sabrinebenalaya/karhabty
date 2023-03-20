const mongoose = require("mongoose");
const announcementSchema = mongoose.Schema({
  description: { required: true, type: String },

  date: { required: true, type: Date, default: Date.now },

  car: { type: mongoose.Schema.Types.ObjectId , ref:'car'},

});

module.exports = mongoose.model("Announcement", announcementSchema);
