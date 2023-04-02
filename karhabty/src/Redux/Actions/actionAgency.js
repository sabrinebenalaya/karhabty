import { GET_AGENCY_By_ID, PUT_AGENCY_By_ID } from "../constante";
import { Url_get_agency_ById,  Url_update_agency_ById  } from "../../Api";
import { putInApi, getFromApi } from "../../Service/services";

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

export const updateAgency = (attribut,text,id) => async (dispatch) => {
  try {
    const {
      data: { agency },
    } = await putInApi(`${ Url_update_agency_ById }/${id}/${attribut}/${text}`);
    dispatch({ type: PUT_AGENCY_By_ID, payload: agency });

  } catch (e) {
    console.log(e);
  }
};
