import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { fruitReducer } from "./reducers/fruitReducer";

const initialState = {
  fruitsSelected: {
    fruits: [],
    vegetables: [],
  },
  vegetables: [],
};

const reducer = combineReducers({
  fruitsSelected: fruitReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
