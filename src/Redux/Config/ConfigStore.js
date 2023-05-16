import { createStore } from "redux";
import { combineReducers } from "redux";
import comments from "../Modules/Comments";

const rootReducer = combineReducers({
  comments,
});
const store = createStore(rootReducer);

export default store;