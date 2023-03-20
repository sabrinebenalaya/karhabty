const express = require("express");
const router = express.Router();
const {
    regitser,
    login,
  } = require("../Controllers/authController");
  router.post("/singup", regitser);
  router.post("/login", login);
module.exports = router;
