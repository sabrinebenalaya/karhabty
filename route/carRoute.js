const express = require("express");

const carController = require("../Controllers/carController");

const router = express.Router();

router.get("/cars", carController.getAllCars);
router.get("/car/:id", carController.getCarById);
router.post("/car", carController.createCar);
router.put("/car/:id", carController.updateCar);
router.delete("/car/:id", carController.deleteCar);
/*router.get("/searchByAdress", searchByAdress);
router.get("/searchByPrice", searchByPrice);
router.get("/searchByBrand", searchByBrand);*/
router.get("/search", carController.search);


module.exports = router;
