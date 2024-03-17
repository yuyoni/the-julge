import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import PostList from "@/pages/search/components/PostList";
import { useFilteredNoticesData } from "@/hooks/useUserQuery";
import Pagination from "@/pages/search/components/Pagination";
import AllNoticeHeader from "@/pages/search/components/AllNoticeHeader";

import type { SelectedLocationList } from "@/components/Filter/types/types.js";
import type { NoticesItem } from "@/types/PostType.js";
import { h3 } from "@/styles/fontsStyle";

export default function AllNotice({ keyword }: { keyword: string }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState<SelectedLocationList>([]);
  const [startsAtValue, setStartsAtValue] = useState<string>("");
  const [hourlyPayValue, setHourlyPayValue] = useState<string>("");
  const [sortStr, setSortStr] = useState("");
  const [page, setPage] = useState(1);

  const TABLES_ITEMS_PER_PAGE = 6;
  const limit = TABLES_ITEMS_PER_PAGE;
  const offset = (page - 1) * TABLES_ITEMS_PER_PAGE;

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortStr(event.target.value);
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
  const { data: noticesData } = useFilteredNoticesData({
    limit,
    offset,
    sortStr,
    startsAtValue,
    hourlyPayValue,
    address,
    keyword,
  });
  const notices = noticesData?.items ?? [];
  const noticeArray = notices.map((notice: NoticesItem) => notice.item);

  return (
    <AllNoticeList>
      <AllNoticeHeader
        handleSelectChange={handleSelectChange}
        sortStr={sortStr}
        handleToggleModal={handleToggleModal}
        isModalVisible={isModalVisible}
        handleModalClose={handleToggleModal}
        onApplyFilter={handleApplyFilter}
        keyword={keyword}
      />

      <PostContent>
        {noticeArray.length === 0 ? (
          <NoPost>등록된 공고가 없습니다.</NoPost>
        ) : (
          <PostList isRecommend={false} noticeArray={noticeArray} />
        )}
      </PostContent>

      <Pagination
        count={noticesData?.count}
        currentPage={page}
        setCurrentPage={setPage}
      />
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
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 31px 18px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const NoPost = styled.div`
  width: 100%;
  color: var(--The-julge-black);
  ${h3};
`;
