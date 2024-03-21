import useCookie from "@/hooks/useCookies";
import { NoticeList } from "@/lib/types/NoticeTypes";
import styled from "@emotion/styled";
import EmployeeButton from "./Employee/EmployeeButton";
import EmployerButton from "./Employer/EmployerButton";
import PostInformation from "./PostInformation";
import { useUser } from "@/contexts/UserContext";
import { h2 } from "@/styles/fontsStyle";

interface PostCardType {
  token: string;
  userType: string;
  noticeData: NoticeList;
  isMyNotice?: boolean;
}

export default function PostCard({
  token,
  userType,
  noticeData,
  isMyNotice,
}: PostCardType) {
  const applyHref = noticeData.links[3].href.slice(18);
  const { closed: isClosed } = noticeData.item;
  const { startsAt } = noticeData.item;
  const isOutdated = new Date(startsAt) < new Date();
  console.log(isClosed);
  console.log(isOutdated);

  const showImageOnText = (isClosed: boolean, isOutdated: boolean) => {
    if (isClosed) return <DimmedText>마감 완료</DimmedText>;
    if (isOutdated) return <DimmedText>지난 공고</DimmedText>;
  };

  const { userInfo } = useUser();

  return (
    <Wrapper>
      <ImageContainer>
        {showImageOnText(isClosed, isOutdated)}
        <img src={noticeData.item.shop.item.imageUrl} alt="shop_image" />
      </ImageContainer>
      <Container>
        <PostInformation noticeData={noticeData} />
        {userType === "employee" ? (
          <EmployeeButton
            applyHref={applyHref}
            isClosed={isClosed}
            isOutdated={isOutdated}
            token={token}
            userInfo={userInfo}
          />
        ) : (
          <EmployerButton
            isMyNotice={isMyNotice!}
            isClosed={isClosed}
            isOutdated={isOutdated}
            token={token}
            userInfo={userInfo}
          />
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  padding: 24px;
  gap: 30px;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  background: var(--The-julge-white, #fff);
  gap: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 300px;
  border-radius: 20px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const DimmedText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--The-julge-gray-00);
  ${h2}
`;
