import { Redirect, Route, RouteProps } from "react-router";
import { useAppSelector } from "../../store/store";
import { IAppState } from "../../store/asteroids/reducer";

export default function ProtectedRoute({ ...routeProps }: RouteProps) {
  const isAuth = useAppSelector((state: IAppState) => state.authReducer.isAuth);

  if (isAuth) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to="/" />;
  }
}
