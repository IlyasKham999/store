import { createStore, combineReducers } from "redux";
import { Burger } from "./Burger";
import { FilterState } from "./FilterState";
import { BurgerUrl } from "./BurgerUrl";
import { UserName } from "./UserName";

const rootReducer = combineReducers({
  burger: Burger,
  from: FilterState,
  burgerUrl: BurgerUrl,
  UserName: UserName,
});

export const store = createStore(rootReducer);
