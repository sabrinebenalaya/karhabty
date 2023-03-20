import { ADD_USER, UPDATE_USER, DELETE_USER } from "../constante";

export const addUser = async (user) => {
  return { type: ADD_USER, payload: user };
};

export const updateUser = async () => {
  return { type: UPDATE_USER };
};

export const deleteUser = async () => {
  return { type: DELETE_USER };
};
