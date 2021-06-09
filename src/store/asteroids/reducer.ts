import { SAVE_ASTEROIDS_DATA } from "./types";

type ActionObject = {
  type: string;
  payload?: object;
};

const initialState = () => ({
  data: [],
});

export const asteroidsReducer = (
  state = initialState(),
  action: ActionObject
) => {
  switch (action.type) {
    default:
      return state;
    case SAVE_ASTEROIDS_DATA: {
      return { ...state, data: action.payload };
    }
  }
};
