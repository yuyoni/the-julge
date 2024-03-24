import Dimmed from "@/components/Dimmed";
import Modal from "@/components/Modal";
import styled from "@emotion/styled";

interface ModalContentProps {
  modalState?: boolean;
  modalIcon: "alert" | "check" | undefined;
  modalText: string;
  handleYesClick: () => void;
  handleNoClick?: () => void;
  yesButtonText?: string;
  setModalState?: (arg: boolean) => void;
}

export default function ModalContent({
  modalState = true,
  modalIcon,
  modalText,
  handleYesClick,
  handleNoClick,
  setModalState,
  yesButtonText,
}: ModalContentProps) {
  return (
    modalState && (
      <Dimmed
        onClick={() => {
          if (setModalState) setModalState(false);
        }}
      >
        {yesButtonText ? (
          <Modal
            modalIcon={modalIcon}
            modalText={modalText}
            handleYesClick={handleYesClick}
            handleNoClick={handleNoClick}
            yesButtonText={yesButtonText}
          />
        ) : (
          <Modal
            modalIcon={modalIcon}
            modalText={modalText}
            handleConfirmClick={handleYesClick}
          />
        )}
      </Dimmed>
    )
  );
}
