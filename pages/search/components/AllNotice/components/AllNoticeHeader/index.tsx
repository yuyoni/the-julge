import styled from "@emotion/styled";
import Filter from "@/components/Filter/Filter";
import HeaderButtons from "@/pages/search/components/AllNotice/components/HeaderButtons";
import HeaderText from "../HeaderText";
import { AllNoticeHeaderProps } from "@/pages/search/types/type";

export default function AllNoticeHeader({
  handleCategoryChange,
  sortStr,
  handleToggleModal,
  isModalVisible,
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
        handleToggleModal={handleToggleModal}
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

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    grid-template-areas:
      "header-text"
      "header-buttons";
  }
`;
