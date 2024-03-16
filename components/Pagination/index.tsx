import { getCurrentPageArray } from "@/lib/utils/getPaginationArray";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import ArrowButton from "./components/ArrowButton";
import PageButton from "./components/PageButton";

type PaginationProps = {
  count: number;
  limit: number;
};

export default function Pagination({ count, limit }: PaginationProps) {
  const router = useRouter();
  const { page } = router.query;

  const currentPage = Number(page) >= 1 ? Number(page) : 1;
  const { currentPageArray, hasPrev, hasNext } = getCurrentPageArray(
    currentPage,
    count,
    limit,
  );

  const handlePageClick = (page: number) => {
    router.push(`/test?page=${page}`);
  };

  const handlePrevClick = () => {
    router.push(`/test?page=${currentPage - 1}`);
  };

  const handleNextClick = () => {
    router.push(`/test?page=${currentPage + 1}`);
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
