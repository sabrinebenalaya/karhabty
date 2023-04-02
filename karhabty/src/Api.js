const envApp = "http://localhost:5000/"


const envCar ="karhabtyCar/car"
export const Url_get_all_cars =`${envApp}karhabtyCar/cars`;
export const Url_search_cars =`${envApp}karhabtyCar/search`;
export const Url_get_car_ById =`${envApp}${envCar}/`;
export const Url_add_car =`${envApp}${envCar}`;
export const Url_update_car_ById =`${envApp}${envCar}/`;
export const Url_delete_car_ById =`${envApp}${envCar}/`;


const envAuth ="karhabty/"
export const Url_SingUp =`${envApp}${envAuth}/singup`;
export const Url_login =`${envApp}${envAuth}/login`;
export const Url_logOut =`${envApp}${envAuth}/logOut`;


const envUser ="karhabtyUser/"
export const Url_get_agency_ById = `${envApp}${envUser}/agency/`;
export const Url_update_agency_ById = `${envApp}${envUser}/user/`;
export const Url_get_user_ById = `${envApp}${envUser}/user/`;
export const Url_all_user_ByRole = `${envApp}${envUser}/users/`;


const envOrder ="karhabtyOrder/order/"
export const Url_add_order = `${envApp}${envOrder}`;
export const Url_update_order_ById = `${envApp}${envOrder}`;
export const Url_delete_user_ById = `${envApp}${envOrder}`;
export const Url_get_order_ById = `${envApp}${envOrder}`;
export const Url_all_orders = `${envApp}${envOrder}`;
export const Url_all_active_orders = `${envApp}${envOrder}status/`;
export const Url_add_payement_method = `${envApp}${envOrder}payement`;


const envAnnouncement ="karhabtyAnnouncement/envAnnouncement/"
export const Url_add_announcement = `${envApp}${envAnnouncement}`;
export const Url_update_announcement_ById = `${envApp}${envAnnouncement}`;
export const Url_delete_announcement_ById = `${envApp}${envAnnouncement}`;
export const Url_get_announcement_ById = `${envApp}${envAnnouncement}`;
export const Url_all_announcement = `${envApp}${envAnnouncement}`;
export const Url_all_active_announcement = `${envApp}karhabtyAnnouncement/activeAnnouncement`;
