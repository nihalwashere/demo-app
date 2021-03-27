import { combineReducers } from "redux";
import { rootContainerReducer } from "../containers/root/state/reducers";

export const rootReducer = combineReducers({
  root: rootContainerReducer,
});
