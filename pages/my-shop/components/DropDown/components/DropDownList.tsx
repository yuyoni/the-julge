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
      <StyledContainer>
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
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 400px;
  max-height: 200px;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;

  /* 스크롤바 스타일링 */
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

const StyledUl = styled.ul`
  width: 400px;
  display: flex;
  padding: 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
  gap: 8px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid var(--The-julge-gray-20);
  background: var(--The-julge-white);
  box-shadow: var(--shadow-1pt);
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
