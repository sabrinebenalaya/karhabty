const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { required: true, type: String },
  lastName: { required: true, type: String },
  agencyName: { required: false, type: String },
  roleUser: { type: String, enum: ["Agency", "User", "Visitor"],  required: true },
  phone: { required: false, type: Number, default: 0 },
  mail: { required: true, type: String, unique:true },
  password: { required: true, type: String },
  photo: { required: false, type: String },
  address: {
    city: { type: String, required: true },
    governorate: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true }
  },
  birthDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
  if (this.role = "Agency") {
    this.photo =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDYy6NKw7aJ0gMebE8g7lJOVSk-_SB_QZhvmXe7rgCQmzXfO1wSE20iNpff6fS8ZYfdY&usqp=CAU";
  }
  if (this.role = "User") {
    this.photo =
    "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png";
  }
   
  next();
});
module.exports = mongoose.model("User", userSchema);
