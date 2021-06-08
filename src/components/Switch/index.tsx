import React from "react";
import { HeaderProps } from "../../containers/Header";
import {
  SwitchEmojiMoon,
  SwitchEmojiSun,
  SwitchInput,
  SwitchSlider,
  SwitchWrapper,
} from "../../styles/Switch";

const Switch: React.FC<HeaderProps> = (props) => (
  <SwitchWrapper className="switch">
    <SwitchEmojiSun>☀️</SwitchEmojiSun>
    <SwitchEmojiMoon>🌙️</SwitchEmojiMoon>
    <SwitchInput type="checkbox" onChange={() => props.themeChangeHandler()} />
    <SwitchSlider className="slider" />
  </SwitchWrapper>
);

export default Switch;
