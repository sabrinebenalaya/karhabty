import { GET_AGENCY_By_ID } from "../constante";
import { Url_get_agency_ById } from "../../Api";
import { getFromApi } from "../../Service/services";

export const getAgency = (id) => async (dispatch) => {
  try {
    const {
      data: { Agency },
    } = await getFromApi(`${Url_get_agency_ById}/${id}`);

    dispatch({ type: GET_AGENCY_By_ID, payload: Agency });
  } catch (e) {
    console.log(e);
  }
};
