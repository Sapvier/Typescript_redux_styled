import React, { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { setAuth } from "../../store/auth/actions";
import { Action } from "redux";

type StateMap = {
  authReducer: {
    isAuth: boolean;
  };
};

type Props = ConnectedProps<typeof connector>;

const ProtectedPage = ({ setIsAuth, isAuth }: Props) => {
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
