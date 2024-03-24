import Button from "@/components/Button/Button";
import CloseButton from "@/components/Button/CloseButton";
import Layout from "@/components/Layout";
import MetaHead from "@/components/MetaHead";
import PostForm from "@/components/PostForm/index";
import { useToast } from "@/contexts/ToastContext";
import { useUser } from "@/contexts/UserContext";
import useCookie from "@/hooks/useCookies";
import fetchData from "@/lib/apis/fetchData";
import TOAST_MESSAGES from "@/lib/constants/toastMessage";
import { NoticeList } from "@/lib/types/NoticeTypes";
import convertToISODate from "@/lib/utils/formatDateString";
import { h1 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import FormModalContent from "./components/FormModalContent";
import ModalContent from "./notices/[noticeId]/components/ModalContent";
import validateFormData from "./utils/validateFormData";

export default function NoticeRegistrationPage() {
  const router = useRouter();
  const { shopId } = router.query;
  const { showToast } = useToast();
  const { userInfo } = useUser();
  const { jwt: token } = useCookie();
  const [modalState, setModalState] = useState({
    isOpen: false,
    formData: {
      hourlyPay: 0,
      startsAt: "",
      workhour: 0,
      description: "",
    },
  });

  if (!userInfo) {
    return (
      <ModalContent
        modalIcon="alert"
        modalText="로그인이 필요합니다"
        handleYesClick={() => router.push("/signin")}
      />
    );
  }

  const handleInputChange = (key: string, value: string | number) => {
    setModalState((prevState) => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [key]: value,
      },
    }));
  };

  const handleFormSubmit = async () => {
    if (
      !validateFormData(
        modalState.formData,
        showToast,
        Number(userInfo.item.shop?.item.originalHourlyPay!),
      )
    )
      return;
    setModalState((prevState) => ({ ...prevState, isOpen: true }));
  };

  const handleModalClose = () => {
    setModalState((prevState) => ({ ...prevState, isOpen: false }));
  };

  const handleYesClick = async () => {
    try {
      const response = await fetchData<NoticeList>({
        param: `/shops/${shopId}/notices`,
        method: "post",
        requestData: convertToISODate(modalState.formData),
        token: token,
      });

      const { id: noticeId } = response.item;
      router.push(`/shops/${shopId}/notices/${noticeId}`);
      showToast(TOAST_MESSAGES.REGISTRATION_SUCCESSFUL);
    } catch (error: any) {
      const { message } = error.response.data;
      alert(message);
    } finally {
      handleModalClose();
    }
  };

  if (!userInfo.item.shop) {
    return (
      <ModalContent
        modalIcon="alert"
        modalText="가게를 먼저 등록해주세요"
        handleYesClick={() => router.push("/my-shop")}
      />
    );
  }

  if (userInfo.item.shop.item.id !== shopId) {
    return (
      <ModalContent
        modalIcon="alert"
        modalText="공고 등록권한이 없습니다"
        handleYesClick={() => router.push("/")}
      />
    );
  }

  return (
    <>
      <MetaHead
        title={`+HE JULGE | ${userInfo.item.shop.item.name} 새 공고 등록`}
      />
      <Layout>
        <Wrapper>
          <Header>
            <Title>공고 등록</Title>
            <CloseButton
              size={32}
              handleClick={() => {
                router.back();
              }}
            />
          </Header>
          <PostForm userInfo={userInfo} handleInputChange={handleInputChange} />
          <ButtonContainer>
            <Button
              text="등록하기"
              color="colored"
              handleClick={handleFormSubmit}
            />
          </ButtonContainer>
          <FormModalContent
            modalState={modalState.isOpen}
            formData={modalState.formData}
            handleYesClick={handleYesClick}
            handleNoClick={handleModalClose}
          />
        </Wrapper>
      </Layout>
    </>
  );
}

const Wrapper = styled.div`
  background: var(--The-julge-gray-05, #fafafa);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  gap: 32px;

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 60px 32px;
  }
  @media only screen and (max-width: 767px) {
    padding: 40px 12px 80px;
    gap: 24px;
  }
`;

const Title = styled.span`
  ${h1}
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  width: 312px;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;
