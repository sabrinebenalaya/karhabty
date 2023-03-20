const Car = require("../Models/car.js");

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    if (cars.length === 0) {
      res.status(400).json({ msg: "No cars is found" });
    } else {
      res.status(200).json({ cars });
    }
  } catch (error) {
    res.status(500).json({ msg: "Operation of getAllCars is failed" });
  }
};

const getOneCar = async (req, res) => {
  const id = req.params.id;
  try {
    const car = await Car.findById(id);
    console.log({car})

    if (!car) {
      console.log({car})
      res.status(402).json({ msg: "Car not found" });
    } else {
      res.status(200).json({ car });
    }
    console.log({car})

  } catch (error) {
    res.status(500).json({ msg: "Operation of getOneCar is failed" });
  }
};

const addCar = async (req, res) => {
  const car = req.body;
  const newCar = new Car({
    brand: car.brand,
    anne: car.anne,
    color: car.color,
    photo: car.photo,
    price: car.price,
    adress: car.adress,
  });
  try {
    const car = await newCar.save();
    if (!car) {
      res.status(404).json({ msg: "Car not added" });
    } else {
      res.status(200).json({ car });
    }
  } catch (error) {
    res.status(500).json({ msg: "Operation of addCar is failed" });
  }
};

const deleteCar = async (req, res) => {
  const id = req.params.id;
  try {
    const car = await Car.findByIdAndDelete(id);
    const cars = await Car.find();
    if (!car) {
      res.status(404).json({ msg: "Car that you want to delete is not found" });
    } else {
      res.status(200).json({ cars });
    }
  } catch (error) {
    res.status(500).json({ msg: "Operation of deleteCar is failed" });
  }
};
const updateCar = async (req, res) => {
  const id = req.params.id;
  const car = req.body;
  try {
    await Car.findByIdAndUpdate(id, car);
    const carUpdated = await Car.findById(id);
    if (!carUpdated) {
      res
        .status(404)
        .json({ msg: "Car that you want to upadate is not found" });
    } else {
      res.status(200).json({ carUpdated });
    }
  } catch (error) {
    res.status(500).json({ msg: "Operation of updateCar is failed" });
  }
};

const searchByAdress = async (req, res) => {
  const { adress } = req.query;
  try {
    const cars = await Car.find();
    const searchedCar = cars.filter((elt) =>
      elt.adress.toLowerCase().includes(adress)
    );
    if (searchedCar.length === 0) {
      res.status(404).json({ msg: "Cars not found" });
    } else {
      res.status(200).json({ searchedCar });
    }
  } catch (error) {
    res.status(500).json({ msg: "Operation of searchByAdress is failed" });
  }
};
const searchByBrand = async (req, res) => {
  const { brand, adress } = req.query;

  try {
    const cars = await Car.find();
    const searchedCar = cars.filter((elt) =>
      elt.brand.toLowerCase().includes(brand)
    );
    if (searchedCar.length === 0) {
      res.status(404).json({ msg: "Cars not found" });
    } else {
      res.status(200).json({ searchedCar });
    }
  } catch (error) {
    res.status(500).json({ msg: "Operation of searchByBrand is failed" });
  }
};
const searchByPrice = async (req, res) => {
  console.log("req=", req.query);
  const { max, min } = req.query;
  console.log(max);
  console.log(min);

  try {
    const cars = await Car.find();
    const searchedCar = cars.filter(
      (elt) => elt.price >= min && elt.price <= max
    );
    if (searchedCar.length === 0) {
      res.status(404).json({ msg: "Cars not found" });
    } else {
      res.status(200).json({ searchedCar });
    }
    console.log("search", searchedCar);
  } catch (error) {
    res.status(500).json({ msg: "Operation of searchByPrice is failed" });
  }
};

const search = async (req, res) => {
  const { max, min, brand, adress } = req.query;
  try {
    let searchedCar = await Car.find();
    if (brand != "") {
      searchedCar = searchedCar.filter(
        (elt) => elt.brand.toLowerCase() === brand.toLowerCase()
      );
    }
    if (adress != "") {
      searchedCar = searchedCar.filter(
        (elt) => elt.adress.toLowerCase() === adress.toLowerCase()
      );
    }
    if (max != 0) {
      searchedCar = searchedCar.filter((elt) => elt.price <= max);
    }
    if (min != 0) {
      searchedCar = searchedCar.filter((elt) => elt.price >= min);
    }
    if (searchedCar.length === 0) {
      res.status(404).json({ msg: "Cars not found" });
    } else {
      res.status(200).json({ searchedCar });
    }
  } catch (error) {
    res.status(500).json({ msg: "Operation of search is failed" });
  }
};

module.exports = {
  search,
  searchByPrice,
  searchByAdress,
  getAllCars,
  updateCar,
  deleteCar,
  addCar,
  searchByBrand,
  getOneCar,

};
