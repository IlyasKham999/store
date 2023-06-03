const defaultState = {
  from: "add",
  filter_brand: "",
};

const FILTER_FROM = "FILTER_FROM";
const FILTER_BRAND = "FILTER_BRAND";

export const FilterState = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_FROM:
      return { ...state, from: action.payload };
    case FILTER_BRAND:
      return { ...state, filter_brand: action.payload };
    default:
      return state;
  }
};

export const fromFilterAction = (payload) => ({ type: FILTER_FROM, payload });
export const brandFilterAction = (payload) => ({ type: FILTER_BRAND, payload });
