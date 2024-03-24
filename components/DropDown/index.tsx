import { useState, ChangeEvent } from "react";
import Input from "../../pages/my-shop/components/Input";
import DropDownList from "./components/DropDownList";
import styled from "@emotion/styled";
import { body1Regular } from "@/styles/fontsStyle";
import {
  InputContainer,
  InputWrapper,
} from "../../pages/my-shop/components/Input";
interface DropDownProps {
  label?: string;
  categories: string[];
  width?: number;
  onCategoryChange?: (category: string) => void | undefined;
  value?: string;
}

export default function DropDown({
  label,
  categories,
  width,
  onCategoryChange,
  value,
}: DropDownProps) {
  const [selectOption, setSelectOption] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (category: string) => {
    setSelectOption(category);
    setIsOpen(!isOpen);
    if (onCategoryChange) onCategoryChange(category);
  };

  const handleInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSelectOption(event.target.value);
  };

  return (
    <DropDownContainer $width={width}>
      {!selectOption && <StyledSpan labelExists={!!label}>선택</StyledSpan>}
      <Input
        label={label}
        type="button"
        value={selectOption}
        includeImage
        handleClick={handleClick}
        onChange={(e) => handleInput(e)}
      />

      {isOpen && (
        <DropDownList categories={categories} handleSelect={handleSelect} />
      )}
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div<{ $width?: number }>`
  width: ${({ $width }) => ($width ? `${$width}px` : "100%")};
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

export const StyledSpan = styled.span<{ labelExists: boolean }>`
  position: absolute;
  top: ${({ labelExists }) => (labelExists ? "52px" : "25px")};
  left: 20px;
  color: var(--The-julge-gray-40);
  ${body1Regular};
  z-index: 1;
`;
