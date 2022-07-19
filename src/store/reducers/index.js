import { combineReducers } from "redux";
import ThemeOptions from "./ThemeOptions";
import { alert } from "./alert.reducer";
import { users } from "./users.reducer";
import { authentication } from "./authentication.reducer";
import { common } from "./common.reducer";

const rootReducer = combineReducers({
  ThemeOptions,
  alert,
  users,
  authentication,
  common,
});

export default rootReducer;
