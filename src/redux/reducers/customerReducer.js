const initialState = [];

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL":
      return [...action.payload];
    default:
      return state;
  }
};
export default customerReducer;
