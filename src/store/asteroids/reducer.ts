import { SAVE_ASTEROIDS_DATA } from "./types";
import { Reducer } from "react";
import { saveAction } from "./actions";
import { IAuthState } from "../auth/reducer";

export interface IAsteroidsState {
  readonly datasets: object[] | undefined;
}

export interface IAppState {
  readonly asteroidsReducer: IAsteroidsState;
  readonly authReducer: IAuthState;
}

const initialAsteroidsState: IAsteroidsState = {
  datasets: [],
};

export const asteroidsReducer: Reducer<IAsteroidsState, saveAction> = (
  state = initialAsteroidsState,
  action
): IAsteroidsState => {
  switch (action.type) {
    default:
      return state;
    case SAVE_ASTEROIDS_DATA: {
      return { ...state, datasets: action.payload };
    }
  }
};
