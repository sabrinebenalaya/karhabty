import { GET_ALL_CARS, SEARCH_CAR, GET_CAR_By_ID } from "../constante";
import { Url_get_all_cars, Url_search_cars, Url_get_car_ById } from "../../Api";
import { getFromApi} from "../../Service/services"


//get all the cars
export const getAllCars = () => async (dispatch) => {
  try {
    const cars= await getFromApi(Url_get_all_cars);
    dispatch({ type: GET_ALL_CARS, payload: cars.data });
  } catch (e) {
    console.log(e);
  }
};

// search a car
export const search = (searchInput, navigate) => async (dispatch) => {
  try {
    const params = {
      params: {
        min: searchInput.min,
        max: searchInput.max,
        brand: searchInput.brand,
        adress: searchInput.adress,
      },
    };
    const {
      data: { searchedCar },
    } = await getFromApi(Url_search_cars, params);
    dispatch({ type: SEARCH_CAR, payload: searchedCar });
    console.log({searchedCar})
    if (searchedCar.length === 0) {
      navigate("/notFound")
      }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      navigate("/notFound");
    } else {
      console.log(error);
    }
  }
};

export const getCar = (id) => async (dispatch) => {
  try {
    const {
      data: { car },
    } = await getFromApi(`${Url_get_car_ById}/${id}`);
    dispatch({ type: GET_CAR_By_ID, payload: car });
  } catch (e) {
    console.log(e);
  }
};

export const addCar = async () => {
  return { type: "ADD_CAR" };
};

export const updateCar = async () => {
  return { type: "UPDATE_CAR" };
};

export const deleteCar = async () => {
  return { type: "DELETE_CAR" };
};

export const searchCarByPrice = async () => {
  return { type: "SEARCH_CAR_BY_PRICE" };
};

export const searchCarByAdress = async () => {
  return { type: "SEARCH_CAR_BY_ADRESS" };
};

export const searchCarByBrand = async () => {
  return { type: "SEARCH_CAR_BY_BRAND" };
};
