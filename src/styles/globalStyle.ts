import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0 auto;
    font-family: 'Roboto Thin', sans-serif;
    font-weight: 400;    
  }
  body {
    background-color: ${(props) => props.theme.secondaryColor};
  }
  `;

export default GlobalStyles;
