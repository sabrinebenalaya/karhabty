const express = require("express");
const {
  searchByBrand,
  search,
  searchByPrice,
  searchByAdress,
  getAllCars,
  updateCar,
  deleteCar,
  addCar,
  getOneCar,
} = require("../Controllers/carController");
const router = express.Router();

router.get("/cars", getAllCars);
router.get("/car/:id", getOneCar);
router.post("/car", addCar);
router.put("/car/:id", updateCar);
router.delete("/car/:id", deleteCar);
router.get("/searchByAdress", searchByAdress);
router.get("/searchByPrice", searchByPrice);
router.get("/searchByBrand", searchByBrand);
router.get("/search", search);


module.exports = router;
