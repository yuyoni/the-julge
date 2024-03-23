import { useNoticesData, useUserData } from "@/pages/search/hooks/useUserQuery";
import { NoticeList } from "@/lib/types/NoticeTypes";
import styled from "@emotion/styled";
import PostList from "../PostList";
import { h1, h3 } from "@/styles/fontsStyle";
import useCookie from "@/hooks/useCookies";

export default function RecommendNotice() {
  const { id, userType } = useCookie();
  const { data: userData } = useUserData(id);

  let address = "";
  if (userType === "") {
    address = "";
  } else {
    address = userData?.item?.address;
  }

  const { data: noticesData } = useNoticesData(address);

  const notices = noticesData?.items ?? [];
  const noticeArray = notices.map((notice: NoticeList) => notice.item);

  return (
    <Wrapper>
      <RecommendList>
        <Header>추천 공고</Header>
        <CustomPostContent>
          <PostList isRecommend={true} noticeArray={noticeArray} />
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
