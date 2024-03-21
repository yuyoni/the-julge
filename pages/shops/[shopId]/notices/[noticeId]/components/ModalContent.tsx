import Modal from "@/components/Modal";
import styled from "@emotion/styled";

interface ModalContentProps {
  setModalState: (arg: boolean) => void;
  modalIcon: "alert" | "check" | undefined;
  modalText: string;
  handleYesClick: () => void;
  handleNoClick?: () => void;
  yesButtonText?: string;
}

export default function ModalContent({
  modalIcon,
  modalText,
  handleYesClick,
  handleNoClick,
  setModalState,
  yesButtonText,
}: ModalContentProps) {
  return (
    <Dimmed
      onClick={() => {
        setModalState(false);
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
  );
}

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
`;
