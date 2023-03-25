const express = require("express");
const {regitser} = require("../Controllers/authController")
const { addUser, updateUser, deleteUser, getUser } = require("../Controllers/userController");
const router = express.Router();
router.post("/person", regitser);
router.put("/person", updateUser);
router.delete("/person", deleteUser);
router.get("/person", getUser);

module.exports = router;


