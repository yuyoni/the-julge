import { ChangeEvent } from "react";
import styled from "@emotion/styled";
import Filter from "@/components/Filter/Filter";
import HeaderButtons from "@/pages/search/components/HeaderButtons";
import type { SelectedLocationList } from "@/components/Filter/types/types";
import HeaderText from "../HeaderText";

interface AllNoticeHeaderProps {
  handleCategoryChange: (category: string) => void;
  sortStr: string;
  handleToggleModal: () => void;
  isModalVisible: boolean;
  handleModalClose: () => void;
  onApplyFilter: (
    locations: SelectedLocationList,
    startsAt: string,
    hourlyPay: string,
  ) => void;
  keyword?: string;
}

export default function AllNoticeHeader({
  handleCategoryChange,
  sortStr,
  handleToggleModal,
  isModalVisible,
  handleModalClose,
  onApplyFilter,
  keyword,
}: AllNoticeHeaderProps) {
  return (
    <Header>
      <HeaderText keyword={keyword} />
      <HeaderButtons
        handleCategoryChange={handleCategoryChange}
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
