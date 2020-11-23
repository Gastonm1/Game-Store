import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const allReducer = combineReducers({
  games: gamesReducer,
});

export default allReducer;
