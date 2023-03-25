const express = require("express");
const { getOneAgency } = require("../Controllers/userController");
const { updateOneAgency } = require("../Controllers/agencyController");
const router = express.Router();

router.get("/agency/:id", getOneAgency);
router.put("/agency/:id/:attribut/:text", updateOneAgency);

module.exports = router;


