import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export type AppDispatch = typeof store.dispatch;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
