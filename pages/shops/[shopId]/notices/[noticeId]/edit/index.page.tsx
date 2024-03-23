import Button from "@/components/Button/Button";
import CloseButton from "@/components/Button/CloseButton";
import Layout from "@/components/Layout";
import PostForm from "@/components/PostForm";
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
import FormModalContent from "../../../components/FormModalContent";
import validateFormData from "../../../utils/validateFormData";
import ModalContent from "../components/ModalContent";

export default function NoticeEditPage() {
  const router = useRouter();
  const { shopId, noticeId } = router.query;
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
    if (!validateFormData(modalState.formData, showToast)) return;
    setModalState((prevState) => ({ ...prevState, isOpen: true }));
  };

  const handleYesClick = async () => {
    try {
      const response = await fetchData<NoticeList>({
        param: `/shops/${shopId}/notices/${noticeId}`,
        method: "put",
        requestData: convertToISODate(modalState.formData),
        token: token,
      });
      router.push(`/shops/${shopId}/notices/${noticeId}`);
      showToast(TOAST_MESSAGES.EDIT_SUCCESSFUL);
    } catch (error: any) {
      const { message } = error.response.data;
      alert(message);
    } finally {
      setModalState((prevState) => ({ ...prevState, isOpen: false }));
    }
  };

  const handleNoClick = () => {
    setModalState((prevState) => ({ ...prevState, isOpen: false }));
  };

  if (!userInfo) {
    return (
      <ModalContent
        modalIcon="alert"
        modalText="로그인이 필요합니다"
        handleYesClick={() => router.push("/signin")}
      />
    );
  } else if (!userInfo.item.shop || userInfo.item.shop.item.id !== shopId) {
    return (
      <ModalContent
        modalIcon="alert"
        modalText="공고 편집 권한이 없습니다"
        handleYesClick={() => router.push("/")}
      />
    );
  }

  return (
    <Layout>
      <Wrapper>
        <Header>
          <Title>공고 편집</Title>
          <CloseButton
            size={32}
            handleClick={() => {
              router.back();
            }}
          />
        </Header>
        <PostForm handleInputChange={handleInputChange} />
        <ButtonContainer>
          <Button
            text="편집하기"
            color="colored"
            handleClick={handleFormSubmit}
          />
        </ButtonContainer>
        {modalState.isOpen && (
          <Dimmed onClick={(prevState) => ({ ...prevState, isOpen: false })}>
            <FormModalContent
              formData={modalState.formData}
              handleYesClick={handleYesClick}
              handleNoClick={handleNoClick}
            />
          </Dimmed>
        )}
      </Wrapper>
    </Layout>
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

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.span`
  ${h1}
`;

const ButtonContainer = styled.div`
  width: 312px;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
