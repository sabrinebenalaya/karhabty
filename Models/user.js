const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: { required: true, type: String },
  lastName: { required: true, type: String },
  agencyName: { required: false, type: String },
  isAgency: { required: true, type: Boolean },
  role: { type: String, enum: ["Visitor", "Agency", "User"], required: true },
  phone: { required: false, type: Number, default: 0 },
  mail: { required: true, type: String },

  password: { required: true, type: String },

  photo: { required: false, type: String },

  adress: { required: false, type: String, default: "" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
userSchema.pre("save", function (next) {
  if (this.isAgency) {
    this.role = "Agency";
    this.agencyName.require = true;
    this.photo =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDYy6NKw7aJ0gMebE8g7lJOVSk-_SB_QZhvmXe7rgCQmzXfO1wSE20iNpff6fS8ZYfdY&usqp=CAU";
  } else {
    this.photo =
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png";
  }
  next();
});
module.exports = mongoose.model("User", userSchema);
