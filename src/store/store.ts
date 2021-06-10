import { applyMiddleware, createStore } from "redux";
import { rootReducer, State } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "./localStorage";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

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
