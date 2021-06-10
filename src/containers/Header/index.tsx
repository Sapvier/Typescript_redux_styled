import React from "react";
import Switch from "../../components/Switch";
import { HeaderWrapper } from "./styled";
import history from "../../history";

export interface HeaderProps {
  themeChangeHandler(): void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const links = [
    {
      id: "",
      title: "Home",
      keyId: 1,
    },
    {
      id: "apollo",
      title: "Apollo 11",
      keyId: 2,
    },
    {
      id: "asteroids",
      title: "Asteroids",
      keyId: 3,
    },
    {
      id: "protected",
      title: "Protected",
      keyId: 4,
    },
  ];
  const handleClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const id = (e.target as Element).id;
    history.push(`/${id}`);
  };

  return (
    <HeaderWrapper>
      <div>
        {links.map((item) => (
          <h2 key={item.keyId} id={item.id} onClick={(e) => handleClick(e)}>
            {" "}
            {item.title}{" "}
          </h2>
        ))}
      </div>
      <Switch themeChangeHandler={props.themeChangeHandler} />
    </HeaderWrapper>
  );
};

export default Header;
