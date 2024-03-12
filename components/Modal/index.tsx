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
}: ModalProps & { buttonColor?: "colored" | "white" | "gray" }) {
  return (
    <Container>
      <ModalInfo modalIcon={modalIcon} modalText={modalText} />
      {modalIcon === "check" ? (
        <StyledButtons>
          <Button text="아니요" color="white" handleClick={handleNoClick} />
          <Button text="예" handleClick={handleYesClick} />
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
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  width: 298px;
  gap: 32px;
  border-radius: 12px;
  background: var(--The-julge-white);
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 80px;
`;
