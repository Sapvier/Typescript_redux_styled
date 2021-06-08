import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    hoverTextColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: "#eae4d4",
  secondaryColor: "#666",
  hoverTextColor: "white",
};

export const darkTheme: DefaultTheme = {
  primaryColor: "#233",
  secondaryColor: "#cacaca",
  hoverTextColor: "rgb(0,0,0)",
};
