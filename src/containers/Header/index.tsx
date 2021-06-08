import React from "react";
import Switch from "../../components/Switch";
import { HeaderWrapper } from "./styled";
import history from "../../history";

export interface HeaderProps {
  themeChangeHandler(): void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const handleClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const id = (e.target as Element).id;
    history.push(`/${id}`);
  };

  return (
    <HeaderWrapper>
      <div>
        <h2 id="" onClick={(e) => handleClick(e)}>
          Home
        </h2>
        <h2 id="apollo" onClick={(e) => handleClick(e)}>
          Apollo 11
        </h2>
      </div>
      <Switch themeChangeHandler={props.themeChangeHandler} />
    </HeaderWrapper>
  );
};

export default Header;
