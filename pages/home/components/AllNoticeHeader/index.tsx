import styled from "@emotion/styled";
import Filter from "@/components/Filter/Filter";
import HeaderButtons from "@/pages/home/components/HeaderButtons";
import { h2 } from "@/styles/fontsStyle";
import { ChangeEvent } from "react";
import { SelectedLocationList } from "@/components/Filter/types/types";

interface AllNoticeHeaderProps {
  handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  sortStr: string;
  handleToggleModal: () => void;
  isModalVisible: boolean;
  handleModalClose: () => void;
  onApplyFilter: (
    locations: SelectedLocationList,
    startsAt: string,
    hourlyPay: string,
  ) => void;
}

export default function AllNoticeHeader({
  handleSelectChange,
  sortStr,
  handleToggleModal,
  isModalVisible,
  handleModalClose,
  onApplyFilter,
}: AllNoticeHeaderProps) {
  return (
    <Header>
      <HeaderText>전체 공고</HeaderText>
      <HeaderButtons
        handleSelectChange={handleSelectChange}
        sortStr={sortStr}
        handleToggleModal={handleToggleModal}
      />
      <Filter
        isModalVisible={isModalVisible}
        handleModalClose={handleModalClose}
        onApplyFilter={onApplyFilter}
      />
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 1028px) {
    padding: 15px 32px;
  }

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    grid-template-areas:
      "header-text"
      "header-buttons";
  }
`;

const HeaderText = styled.span`
  grid-area: header-text;
  ${h2};
`;
