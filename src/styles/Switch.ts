import styled from "styled-components";

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25px;
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    top: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    z-index: 11;
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
  top: 2px;
  right: 2px;
  z-index: 10;

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
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;
