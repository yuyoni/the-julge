import { useNoticesData, useUserData } from "@/hooks/useUserQuery";
import { NoticeList } from "@/lib/types/NoticeTypes";
import styled from "@emotion/styled";
import PostList from "../PostList";
import { h2 } from "@/styles/fontsStyle";

export default function RecommendNotice() {
  // 추후에 로그인을 통해 가져올 데이터(쿠키나 다른 저장소나 상태관리 등)
  const userId = "0dcb5feb-fe19-4b3d-b318-3a449b023461";
  const { data: userData } = useUserData(userId);
  const { data: noticesData } = useNoticesData(userData?.item?.address);
  const notices = noticesData?.items ?? [];

  const noticeArray = notices.map((notice: NoticeList) => notice.item);

  return (
    <RecommendList>
      <Header>맞춤 공고</Header>
      <CustomPostContent>
        <PostList isRecommend={true} noticeArray={noticeArray} />
      </CustomPostContent>
    </RecommendList>
  );
}

const RecommendList = styled.section`
  padding: 30px 0;
  max-width: 968px;
  margin: 0 auto;
`;
const Header = styled.div`
  margin-bottom: 30px;
  width: 100%;
  ${h2};

  @media only screen and (max-width: 1028px) {
    padding: 15px 10px;
  }
`;

const CustomPostContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 294px);
  gap: 31px 18px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 250px);
  }
`;
