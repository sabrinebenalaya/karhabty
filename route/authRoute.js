const express = require("express");
const router = express.Router();
const { regitser, login, logOut } = require("../Controllers/authController");
router.post("/singup", regitser);
router.post("/login", login);
router.get("/logOut", logOut);
module.exports = router;
