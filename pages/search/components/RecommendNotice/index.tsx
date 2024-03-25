import styled from "@emotion/styled";
import PostList from "../PostList";
import { h1, h3 } from "@/styles/fontsStyle";
import { css } from "@emotion/react";
import { useNoticesData, useUserData } from "../../hooks/useQuery";
import { NoticeList } from "@/lib/types/NoticeTypes";
import SkeletonUI from "@/components/Skeleton";

export default function RecommendNotice({ id }: { id: string }) {
  const { data: userData, isLoading: isUserDataLoading } = useUserData(id);

  const {
    data: noticesData,
    isLoading,
    isSuccess,
  } = useNoticesData(userData?.item?.address, id);

  const notices = noticesData ? noticesData.items : [];
  const noticeArray = notices.map((notice: NoticeList) => notice.item);

  return (
    <Wrapper>
      <RecommendList>
        <Header>맞춤 공고</Header>
        <CustomPostContent isLoading={isLoading}>
          {isLoading
            ? Array.from(new Array(3)).map((_, index) => (
                <SkeletonUI key={index} />
              ))
            : !isUserDataLoading &&
              isSuccess && (
                <PostList
                  isRecommend={true}
                  noticeArray={
                    id && userData?.item?.address === undefined
                      ? []
                      : noticeArray
                  }
                  address={userData?.item?.address}
                />
              )}
        </CustomPostContent>
      </RecommendList>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-color: var(--The-julge-purple-05);
`;

const RecommendList = styled.div`
  padding: 30px 0;
  max-width: 968px;
  margin: 0 auto;

  @media only screen and (max-width: 1028px) {
    padding: 15px 32px;
  }
  @media only screen and (max-width: 768px) {
    padding: 15px 20px;
    ${h3}
  }
`;
const Header = styled.div`
  margin-bottom: 30px;
  width: 100%;
  ${h1};

  @media only screen and (max-width: 768px) {
    ${h3}
  }
`;

const CustomPostContent = styled.div<{ isLoading: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 294px);
  gap: 31px 18px;
  justify-content: center;
  align-items: center;

  ${({ isLoading }) =>
    isLoading &&
    css`
      & > * {
        height: 367px;
        background-color: hsl(200, 20%, 80%);
        ${loadingAnimation}
      }
    `}

  @media only screen and (max-width: 1028px) {
    grid-template-columns: repeat(3, 320px);
    justify-content: flex-start;
    grid-auto-flow: column;
    flex-wrap: nowrap;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    & > * {
      height: 367px;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
`;

const loadingAnimation = css`
  @keyframes loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 90%);
    }
  }

  animation: loading 1.5s ease-in-out infinite alternate;
`;
