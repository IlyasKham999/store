import { createStore, combineReducers } from "redux";
import { Burger } from "./Burger";
import { PageWomen } from "./PageWomen";

const rootReducer = combineReducers({
  burger: Burger,
  page: PageWomen,
});

export const store = createStore(rootReducer);
