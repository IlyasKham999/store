const defaultState = {
  burger: true,
  regist: true,
};

const ACTIVE = "ACTIVE";
const REGIST = "REGIST";

export const Burger = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIVE:
      return { ...state, burger: action.payload };
    case REGIST:
      return { ...state, regist: action.payload };
    default:
      return state;
  }
};

export const activeBorgerAction = (payload) => ({ type: ACTIVE, payload });
export const activeRegistAction = (payload) => ({ type: REGIST, payload });
