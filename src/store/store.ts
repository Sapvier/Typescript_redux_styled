import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "./utils/localStorage";

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware())
);

store.subscribe(() => {
  saveState({
    authReducer: store.getState().authReducer,
  });
});
