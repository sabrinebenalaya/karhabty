const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { required: true, type: String },
  lastName: { required: true, type: String },
  agencyName: { required: false, type: String },
  roleUser: { type: String, enum: ["Agency", "User"],  required: false },
  phone: { required: false, type: Number, default: 0 },
  mail: { required: true, type: String, unique:true },
  password: { required: true, type: String },
  photo: { required: false, type: String },
  address: {
    city: { type: String, required: false },
    governorate: { type: String, required: false },
    country: { type: String, required: false },
    postalCode: { type: String, required: false }
  },
  birthDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  isAgency: { required: true, type: Boolean },
});

userSchema.pre("save", function (next) {
  if (this.isAgency ) {
    this.agencyName.require =true
    this.roleUser = "Agency"
    this.photo =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDYy6NKw7aJ0gMebE8g7lJOVSk-_SB_QZhvmXe7rgCQmzXfO1wSE20iNpff6fS8ZYfdY&usqp=CAU";
  }else {
    this.roleUser = "User"
    this.photo =
    "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png";
  }
   
  next();
});
module.exports = mongoose.model("User", userSchema);
