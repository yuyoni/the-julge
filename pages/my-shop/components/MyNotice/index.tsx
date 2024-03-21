import fetchData from "@/lib/apis/fetchData";
import { useCallback } from "react";
import { useInfiniteQuery } from "react-query";

const getMyNoticeData = (shopId: string, query: string) => {
  fetchData(`shops/${shopId}/notices/${query}`);
};

export default function MyNotice({ myShopId }: { myShopId: string }) {
  const {
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    data: myNoticeData,
  } = useInfiniteQuery(
    ["get-notices"],
    ({ pageParam = 1 }) => getMyNoticeData(pageParam),
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 3) {
          return pages.length + 1;
        } else return undefined;
      },
    },
  );

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage],
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!myNoticeData) return <p>Data not found</p>;

  return (
    <>
      <h2>내가 등록한 공고</h2>
    </>
  );
}
