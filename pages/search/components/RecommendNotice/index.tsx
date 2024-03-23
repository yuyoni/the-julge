import styled from "@emotion/styled";
import PostList from "../PostList";
import { h1, h3 } from "@/styles/fontsStyle";
import useUserAndNoticesData from "../../hooks/useUserAndNoticeData";
import { css } from "@emotion/react";

interface RecommendNoticeProp {
  id: string;
}
export default function RecommendNotice({ id }: RecommendNoticeProp) {
  const { noticeArray, address, isLoading } = useUserAndNoticesData(id);

  return (
    <Wrapper>
      <RecommendList>
        <Header>추천 공고</Header>
        <CustomPostContent isLoading={isLoading}>
          {isLoading ? (
            Array.from(new Array(3)).map((_, index) => <div key={index} />)
          ) : (
            <PostList
              isRecommend={true}
              noticeArray={noticeArray}
              address={address}
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
  grid-template-columns: repeat(auto-fill, minmax(294px, 1fr));
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

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    & > * {
      height: 367px;
    }
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
