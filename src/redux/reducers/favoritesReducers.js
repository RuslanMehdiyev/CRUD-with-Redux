const initialState =[]

const favoritesReducer = (state = initialState, action) => {
//   if (state === undefined) {
//     return [];
//   }

  switch (action.type) {
    case "ADD_FAV":
      console.log(state);
      return [...state, action.payload];
    case "DELETE_ALL":
      return [];
    default:
      return state;
  }
};

export default favoritesReducer;
