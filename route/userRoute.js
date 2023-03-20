const express = require("express");
const { addUser, updateUser, deleteUser, getUser } = require("../Controllers/userController");
const router = express.Router();
router.post("/person", addUser);
router.put("/person", updateUser);
router.delete("/person", deleteUser);
router.get("/person", getUser);

module.exports = router;


