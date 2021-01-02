import { ADD_FRUIT, ADD_VEG } from "../constants/fruitConstants";

export const fruitReducer = (state = { fruits: [] }, action) => {
  switch (action.type) {
    case ADD_FRUIT:
      const fruit = action.payload;
      if (!state.fruits) {
        state.fruits = [];
      }
      const existfruit = state.fruits.find((ft) => ft === fruit);
      if (!existfruit) {
        state.fruits.push(fruit);
      } else {
        state.fruits = state.fruits.filter((ft) => ft !== existfruit);
      }
      //   console.log(existfruit);
      return { ...state, fruits: state.fruits };
    case ADD_VEG:
      return { ...state, vegetables: action.payload };
    default:
      return {};
  }
};
