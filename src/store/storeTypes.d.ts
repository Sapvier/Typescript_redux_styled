export type StateMap = {
  authReducer: {
    isAuth: boolean;
  };
};

export interface IAuthState {
  readonly isAuth: boolean;
}

export interface IAsteroidsState {
  readonly datasets: object[] | undefined;
}

export interface IAppState {
  readonly asteroidsReducer: IAsteroidsState;
  readonly authReducer: IAuthState;
}
