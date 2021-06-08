import React from "react";
import { createPortal } from "react-dom";
import { ModalContent, ModalOverlay } from "./styled";

interface Props {
  children: {};
  open: boolean;
  onClose(): void;
}

const VideoModal: React.FC<Props> = ({ children, open, onClose }) => {
  if (!open) return null;
  return createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContent>{children}</ModalContent>
    </>,
    document.body
  );
};

export default VideoModal;
