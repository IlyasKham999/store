import { createStore, combineReducers } from "redux";
import { Burger } from "./Burger";

const rootReducer = combineReducers({
  burger: Burger,
});

export const store = createStore(rootReducer);
