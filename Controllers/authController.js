const User = require("../Models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authController = {};
//Register
authController.regitserr = async (req, res) => {
  const user = req.body;
  console.log(user)
  try {
    const userExist = await User.findOne({ mail: user.mail });
    if (userExist) {
      res.status(400).json({ msg: "user already exist you sould login" });
    } else  {
      const user = new User(req.body);
      const hashedPaswword = await bcrypt.hash(user.password, 10);
      user.password =hashedPaswword
      await user.save();
      const token = jwt.sign({ id: user._id }, "shhhhh");
      res.status(200).json({ user: user, token: token });       
    } 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LogIn
authController.login = async (req, res) => {
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

//Log out
authController.logOut = async (req, res) => {
  try {
    res.clearCookie("token"); // Supprime le cookie "token"
    res.status(200).json({ message: "You are now logged out" });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "server failed" }] });
  }
};

module.exports = authController;

