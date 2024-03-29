import DropDown, { StyledSpan } from "@/components/DropDown";
import { InputContainer, InputWrapper } from "@/pages/my-shop/components/Input";
import { categoryMap } from "@/pages/search/constants/category";
import { HeaderButtonsProps } from "@/pages/search/types/type";
import { body2Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";

export default function HeaderButtons({
  handleCategoryChange,
  handleToggleModal,
}: HeaderButtonsProps) {
  return (
    <Buttons>
      <DropDown
        categories={Array.from(categoryMap.keys())}
        width={120}
        onCategoryChange={handleCategoryChange}
      />
      <FilterButton onClick={handleToggleModal}>상세 필터</FilterButton>
    </Buttons>
  );
}

const Buttons = styled.div`
  grid-area: header-buttons;
  display: flex;
  gap: 10px;
  align-items: center;
  height: 30px;

  ${InputContainer} {
    gap: 0;
    height: 100%;

    ${InputWrapper} {
      height: 100%;

      input {
        background-color: var(--The-julge-gray-10);
        height: 100%;
        padding: 2px 8px;
        align-items: center;
      }
    }
  }

  ${StyledSpan} {
    top: 4px;
    left: 8px;
    color: var(--The-julge-black);
  }
`;

const FilterButton = styled.div`
  display: flex;
  height: 30px;
  padding: 12px;
  align-items: center;
  border-radius: 5px;
  color: var(--The-julge-white, #fff);
  ${body2Regular}
  background: var(--The-julge-green-20);
  cursor: pointer;

  :hover {
    background: var(--The-julge-green-30);
  }
  :active {
    background: var(--The-julge-green-40);
  }
`;
