import { useState } from "react";
import styled from "@emotion/styled";
import { h3 } from "@/styles/fontsStyle";
import Pagination from "@/components/Pagination";
import PostList from "@/pages/search/components/PostList";
import AllNoticeHeader from "@/pages/search/components/AllNotice/components/AllNoticeHeader";
import useAllNotices from "../../hooks/useAllNotices";
import { AllNoticeProps } from "../../types/type";
import Post from "@/components/Post";
import SkeletonUI from "@/components/Skeleton";

export default function AllNotice({
  keyword,
  initialPage = 1,
}: AllNoticeProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible((prev) => !prev);

  const {
    limit,
    count,
    sortStr,
    isSuccess,
    noticeArray,
    handleCategoryChange,
    handleApplyFilter,
  } = useAllNotices({ keyword, initialPage });

  return (
    <AllNoticeList>
      <AllNoticeHeader
        handleCategoryChange={handleCategoryChange}
        sortStr={sortStr}
        handleToggleModal={toggleModal}
        isModalVisible={isModalVisible}
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
              <Pagination count={count} limit={limit} />
            </PaginationWrapper>
          </>
        ))}

      {!isSuccess && (
        <PostContent>
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonUI key={index} height={367} />
          ))}
        </PostContent>
      )}
    </AllNoticeList>
  );
}

const AllNoticeList = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  max-width: 968px;
  min-height: 72vh;
  margin: 0 auto;

  @media only screen and (max-width: 1028px) {
    padding: 15px 32px;
  }
  @media only screen and (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const PostContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 31px 18px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1028px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const NoPost = styled.div`
  grid-column: 1 / 4;
  border: 1px solid var(--The-julge-gray-10);
  padding-top: 100px;
  border-radius: 12px;
  text-align: center;
  width: 100%;
  height: 220px;
  color: var(--The-julge-black);
  ${h3};
`;

const PaginationWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
