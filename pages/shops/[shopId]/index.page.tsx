import Button from "@/components/Button/Button";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import PostForm from "@/components/PostForm/index";
import { useToast } from "@/contexts/ToastContext";
import fetchData from "@/lib/apis/fetchData";
import TOAST_MESSAGES from "@/lib/constants/toastMessage";
import convertToISODate from "@/lib/utils/formatDateString";
import { h1 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import validateFormData from "./utils/validateFormData";

export default function NoticeRegistrationPage() {
  const router = useRouter();
  const { shopId } = router.query;
  const { showToast } = useToast();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    hourlyPay: 0,
    startsAt: "",
    workhour: 0,
    description: "",
  });

  const handleInputChange = (key: string, value: string | number) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleFormSubmit = () => {
    if (!validateFormData(formData, showToast)) return;
    setIsModalOpen(true);
  };

  const handleYesClick = () => {
    const response = fetchData(
      `shops/${shopId}/notices`,
      "POST",
      convertToISODate(formData),
    );

    // router.push("/"); // 공고 등록 한 후 response로 받은 공고 id를 이용해 shops/${shopId}/notices/${noticeId}로 이동해야함
    showToast(TOAST_MESSAGES.REGISTRATION_SUCCESSFUL);
    setIsModalOpen(false);
  };

  const handleNoClick = () => {
    setIsModalOpen(false);
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
        {isModalOpen && (
          <Dimmed>
            <Modal
              modalIcon="check"
              modalText={`시급: ${formData.hourlyPay}원
              시작 일시: ${formData.startsAt}
              업무 시간: ${formData.workhour}
              공고 설명: ${formData.description}
              
              등록하시겠습니까?
            `}
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;
