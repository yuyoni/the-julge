import useCookie from "@/hooks/useCookies";
import { NoticeList } from "@/lib/types/NoticeTypes";
import styled from "@emotion/styled";
import EmployeeButton from "./Employee/EmployeeButton";
import EmployerButton from "./Employer/EmployerButton";
import PostInformation from "./PostInformation";
import { useUser } from "@/contexts/UserContext";

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
  const { userInfo } = useUser();

  return (
    <Wrapper>
      <ImageContainer>
        <img src={noticeData.item.shop.item.imageUrl} alt="shop_image" />
      </ImageContainer>
      <Container>
        <PostInformation noticeData={noticeData} />
        {userType === "employee" ? (
          <EmployeeButton
            applyHref={applyHref}
            isClosed={noticeData.item.closed}
            token={token}
            userInfo={userInfo}
          />
        ) : (
          <EmployerButton
            isMyNotice={isMyNotice!}
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
