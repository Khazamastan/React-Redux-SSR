import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import HomeReducer from "./routes/Home/reducer";
import MenuReducer from "./routes/Menu/reducer";

const reducers = combineReducers({
  restaurants: HomeReducer,
  menu: MenuReducer
})
const configureStore = preloadedState =>
  createStore(reducers, preloadedState, applyMiddleware(thunk));

export default configureStore;
