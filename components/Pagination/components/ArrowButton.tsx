import styled from "@emotion/styled";
import Image from "next/image";

type ArrowButtonProps = {
  type: "prev" | "next";
  onClick: () => void;
  isDisabled: boolean;
};

export default function ArrowButton({
  type,
  onClick,
  isDisabled,
}: ArrowButtonProps) {
  return (
    <NextButton disabled={isDisabled} onClick={onClick}>
      <Image
        src={
          type === "next" ? "/images/arrow-right.svg" : "/images/arrow-left.svg"
        }
        alt="화살표 버튼"
        width={20}
        height={20}
      />
    </NextButton>
  );
}

const NextButton = styled.button<{ disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  height: 24px;
`;
