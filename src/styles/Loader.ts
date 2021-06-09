import styled from "styled-components";
import mission from "../assets/earthmap.jpg";

export const Loader = styled.div`
  /* [1] Allow it to contain the absolutely positions pseudo-elements (later-on) */
  position: relative;

  /* [2] Set-up the dimensions and spacing */
  width: 100px;
  height: 100px;
  margin: 3em auto;

  /* [3] Prepare the animation effects */
  transition: transform 200ms linear;
  animation: rotate 4s linear infinite;
  animation-fill-mode: both; /* This is going to be defined in the next step */

  /* [4] Tweak the appearance, and give it a nice background i.e. the world map */
  color: #000;
  border-radius: 50%;
  background-position: 0 10px;
  background-image: url(${mission});
  box-shadow: inset 1px 0 20px 6px rgba(0, 0, 0, 1);

  /* [5] Position things in a 3d space */
  transform-style: preserve-3d;
  &:after {
    position: absolute;
    top: 0;
    left: 0;

    /* [2] Make it take all the space available in the box (ahem... globe!) */
    width: 100%;
    height: 100%;

    /* [3] Make sure this has no generated content, as we want this just for fancy purposes */
    content: "";

    /* [4] Give it some shape and shadow */
    border-radius: 50%;
    box-shadow: -10px 1px 16px 2px rgba(0, 0, 0, 0.6) inset;
  }
  &:before {
    /* [1] Again, break the flow to show this as an overlay */
    position: absolute;
    top: 0;
    left: 0;

    /* [2] Again, give it all the available space */
    width: 100%;
    height: 100%;

    /* [3] Duh. */
    content: "";

    /* [4] Add some shape and overlay effect to it */
    opacity: 0.2;
    border-radius: 50%;
    background: radial-gradient(circle at 20px 20px, #fff, #000);
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
