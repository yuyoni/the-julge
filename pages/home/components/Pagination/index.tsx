import { body2Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import { ITEMS_PER_PAGE, PAGE_GROUP_SIZE } from "../../constants/paginations";

interface PaginationProp {
  count: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

interface PageButtonProps {
  isActive: boolean;
}

export default function Pagination({
  count,
  currentPage,
  setCurrentPage,
}: PaginationProp) {
  const maxPage = Math.ceil(count / ITEMS_PER_PAGE);
  const startPage =
    Math.floor((currentPage - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, maxPage);
  const isInFirstPageGroup = currentPage <= PAGE_GROUP_SIZE;
  const isInLastPageGroup =
    currentPage > (Math.ceil(maxPage / PAGE_GROUP_SIZE) - 1) * PAGE_GROUP_SIZE;

  return (
    <PaginationBox>
      {!isInFirstPageGroup && (
        <button type="button" onClick={() => setCurrentPage(startPage - 1)}>
          <img src="/images/arrow-left.svg" alt="Previous" />
        </button>
      )}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      ).map((number) => (
        <PageButton
          key={number}
          isActive={number === currentPage}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </PageButton>
      ))}
      {!isInLastPageGroup && (
        <button
          type="button"
          onClick={() => setCurrentPage(startPage + PAGE_GROUP_SIZE)}
        >
          <img src="/images/arrow-right.svg" alt="Next" />
        </button>
      )}
    </PaginationBox>
  );
}

const PaginationBox = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PageButton = styled.button<PageButtonProps>`
  width: 40px;
  height: 40px;
  text-align: center;
  ${body2Regular}
  font-size: 20px;
  background-color: ${({ isActive }) =>
    isActive ? "var(--The-julge-purple-30)" : "transparent"};

  color: ${({ isActive }) =>
    isActive ? "var(--The-julge-gray-00)" : "var(--The-julge-black, #111322)"};
`;
