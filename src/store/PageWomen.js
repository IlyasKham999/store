const defaultState = {
    page: true,
  };
  
  const PAGEWOM = "PAGEWOM";
  
  export const PageWomen = (state = defaultState, action) => {
    switch (action.type) {
      case PAGEWOM:
        return { ...state, page: action.payload };
      default:
        return state;
    }
  };
  
  export const pageWomanAction = (payload) => ({ type: PAGEWOM, payload });