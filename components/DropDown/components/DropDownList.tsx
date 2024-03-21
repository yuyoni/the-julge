import styled from "@emotion/styled";
import { body2Regular } from "@/styles/fontsStyle";

export interface DropDownListProps {
  categories: string[];
  handleSelect: (category: string) => void;
}

export default function DropDownList({
  categories,
  handleSelect,
}: DropDownListProps): JSX.Element {
  return (
    <>
      <StyledUl>
        {categories.map((category: string, index: number) => (
          <StyledLi
            key={index}
            value={category}
            onClick={() => handleSelect(category)}
          >
            {category}
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  padding: 12px 0px;
  position: absolute;
  top: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
  gap: 8px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid var(--The-julge-gray-20);
  background: var(--The-julge-white, #fff);
  box-shadow: var(--shadow-1pt);
  max-height: 230px;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    height: 63px;
    position: absolute;
    top: 12px;
    right: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--The-julge-gray-50);
    border-radius: 40px;
  }
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  color: var(--The-julge-black);
  text-align: center;
  cursor: pointer;
  ${body2Regular}

  &:not(:first-of-type) {
    border-top: 1px solid var(--The-julge-gray-20);
    padding-top: 8px;
  }
`;
