import Button from "@/components/Button/Button";
import Layout from "@/components/Layout";
import PostForm from "@/components/PostForm/index";
import { useToast } from "@/contexts/ToastContext";
import fetchData from "@/lib/apis/fetchData";
import TOAST_MESSAGES from "@/lib/constants/toastMessage";
import { NoticeList } from "@/lib/types/NoticeTypes";
import convertToISODate from "@/lib/utils/formatDateString";
import { h1 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalContent from "./components/ModalContents";
import validateFormData from "./utils/validateFormData";

export default function NoticeRegistrationPage() {
  const router = useRouter();
  const { shopId } = router.query;
  const { showToast } = useToast();

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
      const response = await fetchData<NoticeList>(
        `shops/${shopId}/notices`,
        "POST",
        convertToISODate(modalState.formData),
      );

      const { id: noticeId } = response.item;
      router.push(`/shops/${shopId}/notices/${noticeId}`);
      showToast(TOAST_MESSAGES.REGISTRATION_SUCCESSFUL);
    } catch (error) {
      console.error("Error :", error);
    } finally {
      setModalState((prevState) => ({ ...prevState, isOpen: false }));
    }
  };

  const handleNoClick = () => {
    setModalState((prevState) => ({ ...prevState, isOpen: false }));
  };

  return (
    <Layout>
      <Wrapper>
        <Title>공고 등록</Title>
        <PostForm handleInputChange={handleInputChange} />
        <Button
          text="등록하기"
          color="colored"
          width={312}
          handleClick={handleFormSubmit}
        />
        {modalState.isOpen && (
          <Dimmed>
            <ModalContent
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
`;

const Title = styled.span`
  ${h1}
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
