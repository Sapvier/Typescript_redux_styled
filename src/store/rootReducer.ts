import { combineReducers } from "redux";
import { asteroidsReducer } from "./asteroids/reducer";
import { authReducer } from "./auth/reducer";

export type State = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  asteroidsReducer,
  authReducer,
});
