import styled from "styled-components";

export const SwitchWrapper = styled.label`
  position: relative;

  display: inline-block;
  width: 45px;
  height: 25px;
  & input {
    width: 0;
    height: 0;

    opacity: 0;
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 34px;

  cursor: pointer;
  transition: 0.4s;

  &:before {
    position: absolute;
    z-index: 11;
    top: 2px;
    left: 3px;

    width: 20px;
    height: 20px;

    background-color: white;
    border-radius: 50%;

    content: "";
    transition: 0.4s;
  }
`;
export const SwitchEmojiSun = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;

  font-size: 14px;
`;
export const SwitchEmojiMoon = styled.span`
  position: absolute;
  z-index: 10;
  top: 2px;
  right: 2px;

  font-size: 14px;
`;

export const SwitchInput = styled.input`
  &:checked + ${SwitchSlider} {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:focus + ${SwitchSlider} {
    box-shadow: 0 0 2px grey;
  }
  &:checked + ${SwitchSlider}:before {
    transform: translateX(20px);
  }
`;
