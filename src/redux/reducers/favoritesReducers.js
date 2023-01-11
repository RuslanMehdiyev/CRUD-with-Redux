const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.payload];
    case "DELETE_FROM_FAV":
      return [...state.filter((e) => e.id !== action.payload.id)];
    case "DELETE_ALL":
      return [];
    default:
      return state;
  }
};

export default favoritesReducer;
