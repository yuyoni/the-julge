const PAGE_ARRAY_LIMIT = 5;

type PaginationUtilProps = {
  currentPageArray: number[] | [];
  hasPrev: boolean;
  hasNext: boolean;
};

export function getCurrentPageArray(
  currentPage: number,
  count: number,
  limit: number,
): PaginationUtilProps {
  currentPage = currentPage >= 1 ? currentPage : 1;
  const totalPage = calculateTotalPage(count, limit);
  const startIndex = getStratIndex(currentPage);
  const currentPageArray = getCurrentPageArrayLength(
    startIndex,
    currentPage,
    totalPage,
  );
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPage;

  return { currentPageArray, hasPrev, hasNext };
}

function calculateTotalPage(count: number, limit: number) {
  return Math.ceil(count / limit);
}

function getStratIndex(currentPage: number) {
  currentPage = currentPage >= 1 ? currentPage : 1;
  return (
    Math.floor((currentPage - 1) / PAGE_ARRAY_LIMIT) * PAGE_ARRAY_LIMIT + 1
  );
}

function getCurrentPageArrayLength(
  startIndex: number,
  currentPage: number,
  totalPage: number,
) {
  // 잘못된 페이지 값 입력
  if (currentPage > totalPage) {
    return [];
  }

  // 페이지네이션 limit 만큼 출력하는 경우 - 페이지네이션 limit 보다 총 페이지 수가 더 많을 때
  if (startIndex + PAGE_ARRAY_LIMIT - 1 <= totalPage) {
    const arr = new Array(PAGE_ARRAY_LIMIT).fill(0);
    return arr.map((x, i) => i + startIndex);
  } else {
    // 페이지네이션 limit 보다 적게 출력하는 경우
    const length = totalPage - startIndex + 1;
    const arr = new Array(length).fill(0);
    return arr.map((x, i) => i + startIndex);
  }
}
