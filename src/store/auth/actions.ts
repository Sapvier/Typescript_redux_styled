import { SET_IS_AUTH } from "../types";
import { ActionCreator } from "redux";
import { saveAction } from "../asteroids/actions";

export const setAuth: ActionCreator<saveAction> = () => ({
  type: SET_IS_AUTH,
});
