import ReactModal from "react-modal";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

import { IconButton } from "@/ui";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    ReactModal.setAppElement("#__next");

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex justify-center items-center"
      overlayClassName="fixed inset-0"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
    >
      <div className="relative bg-slate-200 rounded-lg p-6 max-w-lg w-full shadow-lg">
        <IconButton onClick={onClose} className="absolute top-2 right-2">
          <IoMdClose size={24} />
        </IconButton>
        {children}
      </div>
    </ReactModal>
  );
};
