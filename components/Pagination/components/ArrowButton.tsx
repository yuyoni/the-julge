import styled from "@emotion/styled";
import Image from "next/image";
import ArrowLeftGray from "@/public/images/arrow-left.svg";
import ArrowLeftBlack from "@/public/images/arrow-left-black.svg";
import ArrowRightBlack from "@/public/images/arrow-right.svg";
import ArrowRightGray from "@/public/images/arrow-right-gray.svg";

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
  console.log(type, isDisabled);

  return (
    <NextButton disabled={isDisabled} onClick={onClick}>
      <Image
        src={getArrowImage(type, isDisabled)}
        alt="화살표 버튼"
        width={20}
        height={20}
      />
    </NextButton>
  );
}

const getArrowImage = (type: "prev" | "next", isDisabled: boolean) => {
  switch (type) {
    case "prev":
      return isDisabled ? ArrowLeftGray : ArrowLeftBlack;
    case "next":
      return isDisabled ? ArrowRightGray : ArrowRightBlack;
  }
};

const NextButton = styled.button<{ disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  height: 24px;
`;
