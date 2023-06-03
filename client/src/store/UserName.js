const defaultState = {
  name: "",
};

const REGIST_USER = "REGIST_USER";

export const UserName = (state = defaultState, action) => {
  switch (action.type) {
    case REGIST_USER:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export const UserNameAction = (payload) => ({ type: REGIST_USER, payload });
