import { Reducer } from "react";
import { saveAction } from "./actions";
import { SAVE_ASTEROIDS_DATA } from "../types";
import { IAsteroidsState } from "../storeTypes";

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
