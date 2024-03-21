import styled from "@emotion/styled";
import { body2Bold } from "@/styles/fontsStyle";
import { ChangeEvent } from "react";

export interface HeaderButtonsProps {
  handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  sortStr: string;
  handleToggleModal: () => void;
}
export default function HeaderButtons({
  handleSelectChange,
  sortStr = "time",
  handleToggleModal,
}: HeaderButtonsProps) {
  return (
    <Buttons>
      <select onChange={handleSelectChange} value={sortStr}>
        <option value="time">마감임박순</option>
        <option value="pay">시급많은순</option>
        <option value="hour">시간적은순</option>
        <option value="shop">가나다순</option>
      </select>
      <FilterButton onClick={handleToggleModal}>상세 필터</FilterButton>
    </Buttons>
  );
}

const Buttons = styled.div`
  grid-area: header-buttons;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const FilterButton = styled.div`
  display: flex;
  height: 30px;
  padding: 12px;
  align-items: center;
  border-radius: 5px;
  color: var(--The-julge-white, #fff);
  ${body2Bold}
  background: var(--The-julge-purple-30);
  cursor: pointer;
`;
