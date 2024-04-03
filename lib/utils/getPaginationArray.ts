const PAGE_ARRAY_LIMIT = 7;

type PaginationUtilProps = {
  currentPageArray: number[] | [];
  hasPrev: boolean;
  hasNext: boolean;
};

export function getCurrentPageArray(
  currentPage: number,
  count: number,
  limit: number
): PaginationUtilProps {
  const totalPage = calculateTotalPage(count, limit);
  const startIndex = getStratIndex(currentPage);
  const currentPageArray = getCurrentPageArrayLength(
    startIndex,
    currentPage,
    totalPage
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
  totalPage: number
) {
  if (currentPage > totalPage) {
    return [];
  }
  if (startIndex + PAGE_ARRAY_LIMIT - 1 <= totalPage) {
    const arr = new Array(PAGE_ARRAY_LIMIT).fill(0);
    return arr.map((x, i) => i + startIndex);
  } else {
    const length = totalPage - startIndex + 1;
    const arr = new Array(length).fill(0);
    return arr.map((x, i) => i + startIndex);
  }
}
