const express = require("express");
const reviewController = require("../Controllers/reviewController");
const router = express.Router();
router.post("/review/", reviewController.createReview);
router.put("/review/:id", reviewController.updateReview);
router.delete("/review/:id", reviewController.deleteReview);
router.get("/review/:id", reviewController.getReviewById);
router.get("/review/", reviewController.getReviews);


module.exports = router;