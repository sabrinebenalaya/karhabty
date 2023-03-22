const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: { required: true, type: String },

  lastName: { required: true, type: String },
  
  isAgency: { required: true, type: Boolean },
  isAdmin: { required: false, type: Boolean },

  mail: { required: true, type: String },

  password: { required: true, type: String },

  photo: { required: false, type: String },
  
  adress: { required: false, type: String },
});
userSchema.pre('save', function(next) {
  if (this.isAgency) {
    this.isAdmin = true;
  }
  next();
});
module.exports = mongoose.model("User", userSchema);
