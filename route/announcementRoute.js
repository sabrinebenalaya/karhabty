const express = require("express");
const announcementController = require("../Controllers/announcementController");
const router = express.Router();
router.post("/announcement/", announcementController.createAnnouncement);
router.put("/announcement/:id", announcementController.updateAnnouncement);
router.delete("/announcement/:id", announcementController.deleteAnnouncement);
router.get("/announcement/:id", announcementController.getAnnouncementById);
router.get("/announcement/", announcementController.getAllAnnouncements);
router.get("/activeAnnouncement", announcementController.getAllActiveAnnouncements);

module.exports = router;