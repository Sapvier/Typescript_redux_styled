import { Redirect, Route, RouteProps } from "react-router";
import { IAppState } from "../../store/storeTypes";
import { useAppSelector } from "../../store/utils";

export default function ProtectedRoute({ ...routeProps }: RouteProps) {
  const isAuth = useAppSelector((state: IAppState) => state.authReducer.isAuth);
  if (isAuth) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to="/" />;
  }
}
