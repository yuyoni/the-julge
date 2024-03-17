import Image from "next/image";
import styled from "@emotion/styled";
import type { ModalInfo } from "../types/types";
import alertIcon from "@/public/images/alert-icon.svg";
import checkIcon from "@/public/images/check-icon.svg";

export default function ModalInfo({ modalIcon, modalText }: ModalInfo) {
  return (
    <Container>
      {modalIcon && (
        <Image
          width={24}
          height={24}
          src={modalIcon === "alert" ? alertIcon : checkIcon}
          alt={modalIcon}
        />
      )}
      <StyledText>{modalText}</StyledText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const StyledText = styled.span`
  color: var(--The-julge-black);
  text-align: center;
  font-family: Abel;
  font-size: var(--font-body3);
  font-style: normal;
  font-weight: var(--weight-regular);
  line-height: 26px;
`;
