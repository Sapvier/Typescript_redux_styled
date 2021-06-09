import styled from "styled-components";

export const PreviewWrapper = styled.div`
  max-width: 90%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  align-self: center;

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
  cursor: pointer;

  border-left: 35px solid rgba(255, 255, 255, 0.4);
`;
