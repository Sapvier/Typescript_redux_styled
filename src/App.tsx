import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";
import { darkTheme, lightTheme } from "./styles/theme";
import Header from "./components/Header";
import GlobalStyles from "./styles/globalStyle";

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>("dark");
  const themeChangeHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header themeChangeHandler={themeChangeHandler} />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
