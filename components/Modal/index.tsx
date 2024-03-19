import ModalInfo from "./components/ModalInfo";
import Button from "../Button/Button";
import styled from "@emotion/styled";
import { ModalProps } from "./types/types";

export default function Modal({
  modalIcon,
  modalText,
  handleNoClick,
  handleYesClick,
  handleConfirmClick,
  buttonColor = "white",
  yesButtonText = "예",
}: ModalProps & {
  buttonColor?: "colored" | "white" | "gray";
  yesButtonText?: string;
}) {
  return (
    <Container>
      <ModalInfo modalIcon={modalIcon} modalText={modalText} />
      {modalIcon === "check" ? (
        <StyledButtons>
          <Button
            text="아니오"
            color="white"
            handleClick={handleNoClick}
            width={80}
          />
          <Button
            text={yesButtonText}
            handleClick={handleYesClick}
            width={80}
          />
        </StyledButtons>
      ) : (
        <StyledButtons>
          <Button
            text="확인"
            color={buttonColor}
            handleClick={handleConfirmClick}
          />
        </StyledButtons>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  width: 298px;
  gap: 32px;
  border-radius: 12px;
  background: var(--The-julge-gray-00);
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;
