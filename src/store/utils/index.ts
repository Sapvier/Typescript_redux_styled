import { TypedUseSelectorHook, useSelector } from "react-redux";
import { State } from "../rootReducer";
import { store } from "../store";

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
