import styled from "styled-components";

export const PreviewWrapper = styled.div`
  position: relative;

  display: flex;
  max-width: 90%;
  height: auto;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin: 0;

  & img {
    max-width: 100%;
    height: auto;
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 40%;
  left: 47%;

  width: 0;
  height: 0;

  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 35px solid rgba(255, 255, 255, 0.4);

  cursor: pointer;
`;
