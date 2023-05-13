import { createStore, combineReducers } from "redux";
import { Burger } from "./Burger";
import { Jewelry } from "./JewelryStore";

const rootReducer = combineReducers({
  burger: Burger,
  items: Jewelry,
});

export const store = createStore(rootReducer);
