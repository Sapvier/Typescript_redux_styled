import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { setAuth } from "../../store/auth/actions";
import { Action } from "redux";
import { StateMap } from "../../store/storeTypes";

type ProtectedProps = ConnectedProps<typeof connector>;

const ProtectedPage = ({ setIsAuth, isAuth }: ProtectedProps) => {
  const handler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsAuth();
  };

  return (
    <div>
      <h1>Protected</h1>
      <button onClick={handler}>Click</button>
    </div>
  );
};

const mapStateToProps = ({ authReducer: { isAuth } }: StateMap) => ({
  isAuth,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setIsAuth: () => dispatch(setAuth()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ProtectedPage);
