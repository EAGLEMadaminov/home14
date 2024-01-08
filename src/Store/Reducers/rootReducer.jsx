import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import Counter from "./Counter";
import SettingsReducer from "./SettingsReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  counter: Counter,
  user: () => ({}),
  settings: SettingsReducer,
});
export default rootReducer;
