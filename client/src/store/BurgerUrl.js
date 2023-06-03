const defaultState = {
  activJewelry: false,
  activClock: false,
  activBrend: false,
  activAromat: false,
  activIzdelia: false,
};

const ACTIVE_JEWELRY = "ACTIVE_JEWELRY";
const ACTIVE_CLOCK = "ACTIVE_CLOCK";
const ACTIVE_BRAND = "ACTIVE_BRAND";
const ACTIVE_PERFUME = "ACTIVE_PERFUME";
const ACTIVE_LEATHER = "ACTIVE_LEATHER";

export const BurgerUrl = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIVE_JEWELRY:
      return {
        ...state,
        activJewelry: action.payload,
        activClock: false,
        activBrend: false,
        activAromat: false,
        activIzdelia: false,
      };
    case ACTIVE_CLOCK:
      return {
        ...state,
        activJewelry: false,
        activClock: action.payload,
        activBrend: false,
        activAromat: false,
        activIzdelia: false,
      };
    case ACTIVE_BRAND:
      return {
        ...state,
        activJewelry: false,
        activClock: false,
        activBrend: action.payload,
        activAromat: false,
        activIzdelia: false,
      };
    case ACTIVE_PERFUME:
      return {
        ...state,
        activJewelry: false,
        activClock: false,
        activBrend: false,
        activAromat: action.payload,
        activIzdelia: false,
      };
    case ACTIVE_LEATHER:
      return {
        ...state,
        activJewelry: false,
        activClock: false,
        activBrend: false,
        activAromat: false,
        activIzdelia: action.payload,
      };
    default:
      return state;
  }
};

export const activeJewelryAction = (payload) => ({
  type: ACTIVE_JEWELRY,
  payload,
});
export const activeClockAction = (payload) => ({
  type: ACTIVE_CLOCK,
  payload,
});
export const activeBrandAction = (payload) => ({
  type: ACTIVE_BRAND,
  payload,
});
export const activePerfumeAction = (payload) => ({
  type: ACTIVE_PERFUME,
  payload,
});
export const activeLeatherAction = (payload) => ({
  type: ACTIVE_LEATHER,
  payload,
});
