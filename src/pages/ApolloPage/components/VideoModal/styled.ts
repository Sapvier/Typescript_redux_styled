import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: fixed;
  z-index: 1000;
  top: 45%;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  transform: translate(-50%, -50%);
`;
