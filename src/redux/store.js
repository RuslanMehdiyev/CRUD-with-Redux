import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import customerReducer from "./reducers/customerReducer";
import favoritesReducer from "./reducers/favoritesReducers";

const allReducers = combineReducers({
  customerReducer,
  favoritesReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk));
export default store;
