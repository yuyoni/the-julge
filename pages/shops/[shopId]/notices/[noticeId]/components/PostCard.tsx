import useCookie from "@/hooks/useCookies";
import { NoticeList } from "@/lib/types/NoticeTypes";
import styled from "@emotion/styled";
import EmployeeButton from "./Employee/EmployeeButton";
import EmployerButton from "./Employer/EmployerButton";
import PostInformation from "./PostInformation";
import { useUser } from "@/contexts/UserContext";
import { h2 } from "@/styles/fontsStyle";
import { useState } from "react";
import { useRouter } from "next/router";
import ModalContent from "./ModalContent";
import Button from "@/components/Button/Button";
import Image from "next/image";

interface PostCardType {
  token: string;
  noticeData: NoticeList;
  isMyNotice?: boolean;
}

export default function PostCard({
  token,
  noticeData,
  isMyNotice,
}: PostCardType) {
  const { userInfo } = useUser();
  const applyHref = noticeData.links[3].href.slice(18);
  const { closed: isClosed } = noticeData.item;
  const { startsAt } = noticeData.item;
  const isOutdated = new Date(startsAt) < new Date();
  const router = useRouter();
  const [showSigninModal, setShowSigninModal] = useState(false);

  const showImageOnText = (isClosed: boolean, isOutdated: boolean) => {
    if (isClosed) return <DimmedText>마감 완료</DimmedText>;
    if (isOutdated) return <DimmedText>지난 공고</DimmedText>;
  };

  const getComponentBasedOnUser = () => {
    if (!userInfo) {
      return (
        <>
          <Button
            color="colored"
            text="신청하기"
            handleClick={() => {
              setShowSigninModal(true);
            }}
          />
          {showSigninModal && (
            <ModalContent
              modalIcon="alert"
              modalText="로그인이 필요합니다"
              handleYesClick={() => router.push("/signin")}
              setModalState={setShowSigninModal}
            />
          )}
        </>
      );
    } else if (userInfo.item.type === "employee") {
      return (
        <EmployeeButton
          applyHref={applyHref}
          isClosed={isClosed}
          isOutdated={isOutdated}
          token={token}
          userInfo={userInfo}
        />
      );
    } else {
      return (
        <EmployerButton
          isMyNotice={isMyNotice!}
          isClosed={isClosed}
          isOutdated={isOutdated}
          token={token}
          userInfo={userInfo}
        />
      );
    }
  };

  return (
    <Wrapper>
      <ImageContainer>
        {showImageOnText(isClosed, isOutdated)}
        <img src={noticeData.item.shop.item.imageUrl} alt="shop_image" />
      </ImageContainer>
      <Container>
        <PostInformation noticeData={noticeData} />
        {getComponentBasedOnUser()}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  padding: 24px;
  gap: 30px;
  width: 100%;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  background: var(--The-julge-white, #fff);
  gap: 30px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 560px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
