import { ADD_FRUIT, ADD_VEG } from "../constants/fruitConstants";

export const addFruits = (fruit) => async (dispatch) => {
  dispatch({
    type: ADD_FRUIT,
    payload: fruit,
  });
};
export const addVeg = (veg) => async (dispatch) => {
  dispatch({
    type: ADD_VEG,
    payload: veg,
  });
};
