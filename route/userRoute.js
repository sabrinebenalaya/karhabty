const express = require("express");
const {regitser} = require("../Controllers/authController")
const userController = require("../Controllers/userController");
const router = express.Router();
//router.post("/user", userController.create);
router.put("/user/:id", userController.update);
router.delete("/user/:id", userController.delete);
router.get("/user/:id", userController.getUserById);
router.get("/users/:role", userController.getAllByRole);
router.get("/agency/:id", userController.getAgency);

module.exports = router;


