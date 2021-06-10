import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";
import { darkTheme, lightTheme } from "./styles/theme";
import Header from "./containers/Header";
import GlobalStyles from "./styles/globalStyle";
import ApolloPage from "./pages/ApolloPage";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import AsteroidsPage from "./pages/AsteroidsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedPage from "./pages/ProtectedPage";

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>("dark");
  const themeChangeHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router history={history}>
        <Header themeChangeHandler={themeChangeHandler} />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/apollo" component={ApolloPage} exact />
          <Route path="/asteroids" component={AsteroidsPage} exact />
          <ProtectedRoute path="/protected" component={ProtectedPage} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
