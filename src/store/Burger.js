const defaultState = {
  burger: true,
};

const ACTIVE = "ACTIVE";

export const Burger = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIVE:
      return { ...state, burger: action.payload };
    default:
      return state;
  }
};

export const activeBorgerAction = (payload) => ({ type: ACTIVE, payload });
