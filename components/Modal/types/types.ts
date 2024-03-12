export interface ModalInfo {
  modalIcon?: "alert" | "check";
  modalText: string;
}

export interface ModalProps extends ModalInfo {
  handleNoClick?: () => void;
  handleYesClick?: () => void;
  handleConfirmClick?: () => void;
}
