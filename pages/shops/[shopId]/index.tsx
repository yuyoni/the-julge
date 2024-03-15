import Button from "@/components/Button/Button";
import Layout from "@/components/Layout";
import PostForm from "@/components/PostForm/PostForm";
import { useToast } from "@/contexts/ToastContext";
import { h1 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NoticeRegistrationPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    wage: "",
    start_at: "",
    work_time: "",
    description: "",
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleRegisterClick = () => {
    if (
      formData.wage.trim() === "" ||
      formData.start_at.trim() === "" ||
      formData.work_time.trim() === "" ||
      formData.description.trim() === ""
    ) {
      showToast("모든 필드를 작성해주세요.");
      return;
    }

    const confirmed = window.confirm(
      `\n시급: ${formData.wage}\n시작 일시: ${formData.start_at}\n업무 시간: ${formData.work_time}\n공고 설명: ${formData.description}\n\n등록하시겠습니까?`,
    );
    if (confirmed) {
      router.push("/"); // 공고 등록 한 후 id를 이용해 shops/${shopId}/notices/${noticeId}로 이동해야함
      showToast("등록되었습니다!");
    }
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
          handleClick={handleRegisterClick}
        />
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
