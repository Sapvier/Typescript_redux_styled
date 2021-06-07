import React from "react";
import { HeaderWrapper } from "./styled";

interface HeaderProps {
  themeChangeHandler(): void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderWrapper>
      <h2 onClick={() => props.themeChangeHandler()}>Navbar</h2>
    </HeaderWrapper>
  );
};

export default Header;
