import axios from "axios";
export const getFromApi = (url) => axios.get(url);
export const getCarFromApi = (url, param) => axios.get(url, param);

export const putToApi =(url,param)=>axios.put(url, param)
 

