import React from "react";
import { HeaderProps } from "../../containers/Header";
import {
  SwitchEmojiMoon,
  SwitchEmojiSun,
  SwitchInput,
  SwitchSlider,
  SwitchWrapper,
} from "./Switch";

const Switch: React.FC<HeaderProps> = (props) => (
  <SwitchWrapper>
    <SwitchEmojiSun>☀️</SwitchEmojiSun>
    <SwitchEmojiMoon>🌙️</SwitchEmojiMoon>
    <SwitchInput type="checkbox" onChange={() => props.themeChangeHandler()} />
    <SwitchSlider />
  </SwitchWrapper>
);

export default Switch;
