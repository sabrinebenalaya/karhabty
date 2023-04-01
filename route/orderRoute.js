const express = require("express");
const router = express.Router();
const orderController = require("../Controllers/orderController");
router.post("/order/", orderController.createOrder);
router.put("/order/:id", orderController.updateOrder);
router.delete("/order/:id", orderController.deleteOrder);
router.get("/order/:id", orderController.getOrderById);
router.get("/order/", orderController.getAllOrder);
router.get("/order/status/:status", orderController.getAllActiveOrde);
router.post("/order/payement", orderController.createPayement);
module.exports = router;


