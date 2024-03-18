import { getCurrentPageArray } from "@/lib/utils/getPaginationArray";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import ArrowButton from "./components/ArrowButton";
import PageButton from "./components/PageButton";
import objectToQueryString from "@/lib/utils/objectToQueryString";

type PaginationProps = {
  count: number;
  limit: number;
};

export default function Pagination({ count, limit }: PaginationProps) {
  const router = useRouter();
  const { page } = router.query;
  const basePath = router.pathname;

  const currentPage = Number(page) >= 1 ? Number(page) : 1;
  const { currentPageArray, hasPrev, hasNext } = getCurrentPageArray(
    currentPage,
    count,
    limit,
  );

  const handlePageClick = (page: number) => {
    const query = objectToQueryString({ ...router.query, page });
    router.push(`${basePath}?${query}`);
  };

  const handlePrevClick = () => {
    handlePageClick(currentPage - 1);
  };

  const handleNextClick = () => {
    handlePageClick(currentPage + 1);
  };

  return (
    <Wrapper>
      <ArrowButton
        type="prev"
        onClick={handlePrevClick}
        isDisabled={!hasPrev}
      />
      <PageButtonContainer>
        {currentPageArray.length > 0 &&
          currentPageArray.map((index: number) => (
            <PageButton
              key={index}
              pageIndex={index}
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
