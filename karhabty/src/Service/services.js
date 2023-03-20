import axios from "axios";
export const getAllCarsFromApi = (url) => axios.get(url);
export const getCarFromApi = (url, param) => axios.get(url, param);
