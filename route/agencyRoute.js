const express = require("express");
const { getOneAgency } = require("../Controllers/userController");
const router = express.Router();

router.get("/agency/:id", getOneAgency);


module.exports = router;


