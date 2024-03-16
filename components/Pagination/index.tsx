import { getCurrentPageArray } from "@/lib/utils/getPaginationArray";
import styled from "@emotion/styled";
import ArrowButton from "./components/ArrowButton";
import PageButton from "./components/PageButton";

type PaginationProps = {
  data: any;
  currentPage: number;
  setPage: (page: number) => void;
};

export default function Pagination({
  data,
  currentPage,
  setPage,
}: PaginationProps) {
  console.log(currentPage);
  const { count, limit } = data;
  const { currentPageArray, hasPrev, hasNext } = getCurrentPageArray(
    currentPage,
    count,
    limit,
  );

  const handlePageClick = (pageIndex: number) => {
    setPage(pageIndex);
  };

  const handlePrevClick = () => {
    setPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setPage(currentPage + 1);
  };

  return (
    <Wrapper>
      <ArrowButton
        type="prev"
        onClick={handlePrevClick}
        isDisabled={!hasPrev}
      />
      <PageButtonContainer>
        {typeof currentPageArray &&
          currentPageArray.map((idx: any) => (
            <PageButton
              key={idx}
              pageIndex={idx}
              page={currentPage}
              onClick={handlePageClick}
            />
          ))}
      </PageButtonContainer>
      <ArrowButton
        type="next"
        onClick={handleNextClick}
        isDisabled={!hasNext}
      />
    </Wrapper>
  );
}

const PageButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
