import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import arrowDown from "@/public/images/arrow-down.svg";
import { InputContentProps } from "../types/types";
import arrowUp from "@/public/images/arrow-up.svg";

export default function InputContent({
  includeText,
  includeImage,
}: InputContentProps) {
  const [currentImage, setCurrentImage] = useState(arrowDown);

  const handleImageClick = () => {
    if (currentImage === arrowDown) {
      setCurrentImage(arrowUp);
    } else {
      setCurrentImage(arrowDown);
    }
  };

  if (includeText) {
    return <StyledSpan>{includeText}</StyledSpan>;
  } else if (includeImage) {
    return (
      <StyledImageWrapper onClick={handleImageClick}>
        <StyledImage
          width={16}
          height={16}
          src={currentImage}
          alt="Included Image"
        />
      </StyledImageWrapper>
    );
  }
}

const commonStyles = css`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;

const StyledImageWrapper = styled.div`
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  ${commonStyles};
  pointer: cursor;
`;

const StyledSpan = styled.span`
  ${commonStyles};
  font-size: 16px;
`;
