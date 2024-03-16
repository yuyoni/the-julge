import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

type TypeButtonProps = {
  onClick: () => void;
  isChecked: boolean;
  text: string;
};

export default function TypeButton({
  onClick,
  isChecked,
  text,
}: TypeButtonProps) {
  return (
    <ButtonWrapper>
      <Image
        src={isChecked ? "/images/check-icon.svg" : "/images/uncheck-icon.svg"}
        alt="회원 유형"
        width={20}
        height={20}
      />
      <Button
        isChecked={isChecked}
        color="white"
        type="button"
        onClick={onClick}
      >
        {text}
      </Button>
    </ButtonWrapper>
  );
}

const getBorderColor = (isChecked: boolean) => {
  return isChecked
    ? css`
        border: 1px solid var(--The-julge-purple-40);
      `
    : css`
        border: 1px solid var(--The-julge-gray-30);
      `;
};

const Button = styled.button<{ isChecked: boolean }>`
  width: 167px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 12px 12px 12px 21px;
  background: var(--The-julge-gray-00);
  font-size: 14px;
  color: var(--The-julge-black);

  :active,
  :hover {
    background: var(--The-julge-purple-10);
  }

  ${({ isChecked }) => getBorderColor(isChecked)}
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;

  img {
    position: absolute;
    left: 39px;
    top: 14px;
  }
`;
