import { SET_IS_AUTH } from "../types";
import { Reducer } from "react";
import { saveAction } from "../asteroids/actions";
import { IAuthState } from "../storeTypes";

const localStore = JSON.parse(localStorage.getItem("isAuth") || `null`);
const parsed = localStore === null ? false : localStore;

const initialAuthState: IAuthState = {
  isAuth: parsed,
};

export const authReducer: Reducer<IAuthState, saveAction> = (
  state = initialAuthState,
  action
): IAuthState => {
  switch (action.type) {
    default:
      return state;
    case SET_IS_AUTH: {
      return { ...state, isAuth: !state.isAuth };
    }
  }
};
