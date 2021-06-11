import styled from "styled-components";
import mission from "../assets/earthmap.jpg";

export const Loader = styled.div`
  position: relative;

  width: 100px;
  height: 100px;
  margin: 3em auto;

  animation: rotate 4s linear infinite;
  animation-fill-mode: both;
  background-image: url(${mission});
  background-position: 0 10px;
  border-radius: 50%;
  box-shadow: inset 1px 0 20px 6px rgba(0, 0, 0, 1);

  color: #000;

  transform-style: preserve-3d;
  transition: transform 200ms linear;

  &:after {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: -10px 1px 16px 2px rgba(0, 0, 0, 0.6) inset;

    content: "";
  }
  &:before {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20px 20px, #fff, #000);
    border-radius: 50%;

    content: "";
    opacity: 0.2;
  }
  @keyframes rotate {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 500px 0;
    }
  }
`;
