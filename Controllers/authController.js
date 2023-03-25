const User = require("../Models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const regitser = async (req, res) => {
  const user = req.body;

  try {
    const foundUser = await User.findOne({ mail: user.mail });
    if (foundUser) {
      res.status(400).json({ msg: "user already exist you sould login" });
    } else if (!foundUser) {
      const hashedPaswword = await bcrypt.hash(user.password, 10);
      let newUser = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        agencyName: user.agencyName,
        mail: user.mail,
        phone: user.phone,
        password: hashedPaswword,
        isAgency: user.isAgency,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, "shhhhh");
      res.status(200).json({ user: newUser, token: token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Operation of regitser is failed" });
  }
};

const login = async (req, res) => {
  const userInfo = req.body;
  try {
    const user = await User.findOne({ mail: userInfo.mail });
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "you must register before" }] });
    } else {
      const result = await bcrypt.compare(userInfo.password, user.password);
      if (!result) {
        res.status(401).json({ errors: [{ msg: "wrong password" }] });
      } else {
        const token = await jwt.sign({ id: user._id }, "shhhhh");
        res.status(200).json({ user, token });
      }
    }
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "server failed" }] });
  }
};

module.exports = {
  regitser,
  login,
};
