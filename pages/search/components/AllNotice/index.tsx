import { ChangeEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { h3 } from "@/styles/fontsStyle";
import Pagination from "@/components/Pagination";
import PostList from "@/pages/search/components/PostList";
import AllNoticeHeader from "@/pages/search/components/AllNoticeHeader";
import { useFilteredNoticesData } from "@/pages/search/hooks/useUserQuery";
import type { SelectedLocationList } from "@/components/Filter/types/types.js";
import { NoticeList } from "@/lib/types/NoticeTypes";

interface AllNoticeProps {
  keyword: string;
  initialPage?: number;
}

export default function AllNotice({
  keyword,
  initialPage = 1,
}: AllNoticeProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState<SelectedLocationList>([]);
  const [startsAtValue, setStartsAtValue] = useState<string>("");
  const [hourlyPayValue, setHourlyPayValue] = useState<string>("");
  const [sortStr, setSortStr] = useState("pay");
  const [page, setPage] = useState(initialPage);

  const TABLES_ITEMS_PER_PAGE = 6;
  const limit = TABLES_ITEMS_PER_PAGE;
  const offset = (page - 1) * TABLES_ITEMS_PER_PAGE;

  useEffect(() => {
    setPage(initialPage);
  }, [initialPage]);

  const handleCategoryChange = (category: string) => {
    setSortStr(category);
  };

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleApplyFilter = (
    locations: SelectedLocationList,
    startsAt: string,
    hourlyPay: string,
  ) => {
    setAddress(locations);
    setStartsAtValue(startsAt);
    setHourlyPayValue(hourlyPay);
  };

  /**
   * 데이터 요청 시작
   * limit: 카드 개수
   * offset: 페이지네이션을 위해 앞에 제외할 카드 숫자
   * startsAtValue:날짜 (yyyy-mm-dd)
   * hourlyPayValue: 시급
   * address: 주소 배열
   */
  const { data: noticesData, isSuccess } = useFilteredNoticesData({
    limit,
    offset,
    sortStr,
    startsAtValue,
    hourlyPayValue,
    address,
    keyword,
  });
  const notices = noticesData?.items ?? [];
  const noticeArray = notices.map((notice: NoticeList) => notice.item);

  return (
    <AllNoticeList>
      <AllNoticeHeader
        handleCategoryChange={handleCategoryChange}
        sortStr={sortStr}
        handleToggleModal={handleToggleModal}
        isModalVisible={isModalVisible}
        handleModalClose={handleToggleModal}
        onApplyFilter={handleApplyFilter}
        keyword={keyword}
      />

      {isSuccess &&
        (noticeArray.length === 0 ? (
          <PostContent>
            <NoPost>등록된 공고가 없습니다.</NoPost>
          </PostContent>
        ) : (
          <>
            <PostContent>
              <PostList isRecommend={false} noticeArray={noticeArray} />
            </PostContent>

            <PaginationWrapper>
              <Pagination count={noticesData?.count} limit={limit} />
            </PaginationWrapper>
          </>
        ))}
    </AllNoticeList>
  );
}

const AllNoticeList = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  max-width: 968px;
  margin: 0 auto;
`;

const PostContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 294px);
  gap: 31px 18px;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 250px);
  }
`;

const NoPost = styled.div`
  grid-column: 1 / 4;
  text-align: center;
  width: 100%;
  color: var(--The-julge-black);
  ${h3};
`;

const PaginationWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;
