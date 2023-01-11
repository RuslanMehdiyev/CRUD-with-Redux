import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import customerReducer from "./reducers/customerReducer";
import favoritesReducers from "./reducers/favoritesReducers";

const allReducers = combineReducers({
  customerReducer,
  favoritesReducers,
});

const store = createStore(allReducers,applyMiddleware(thunk));
export default store;
