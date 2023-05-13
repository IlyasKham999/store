const defaultState = {
  items: { 
    nameItem: 'Кольцо', 
    brand: 'BMW', 
    title: 'Мерс лучше', 
    
  }
  };
  
  const ITEMS = "PAGEWOM";
  
  export const Jewelry = (state = defaultState, action) => {
    switch (action.type) {
      case ITEMS:
        return { ...state, items: action.payload };
      default:
        return state;
    }
  };
  
  export const itemsAction = (payload) => ({ type: ITEMS, payload });