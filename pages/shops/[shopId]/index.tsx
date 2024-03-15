import Button from "@/components/Button/Button";
import Layout from "@/components/Layout";
import PostForm from "@/components/PostForm/index";
import { useToast } from "@/contexts/ToastContext";
import { h1 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NoticeRegistrationPage() {
  const router = useRouter();
  const { showToast } = useToast();

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

  const validateFormData = () => {
    const { hourlyPay, startsAt, workhour, description } = formData;
    if (hourlyPay <= 0 || startsAt.trim() === "" || workhour <= 0) {
      showToast("모든 필드를 작성해주세요.");
      return false;
    }
    if (isNaN(hourlyPay) || isNaN(workhour)) {
      showToast("시급과 업무 시간은 숫자로 입력해주세요.");
      return false;
    }
    if (hourlyPay < 9860) {
      showToast("시급은 최저시급 이상 입력해주세요");
      return false;
    }
    return true;
  };

  const handleFormSubmit = () => {
    if (!validateFormData()) return;

    const { hourlyPay, startsAt, workhour, description } = formData;
    const confirmed = window.confirm(
      `\n시급: ${hourlyPay}\n시작 일시: ${startsAt}\n업무 시간: ${workhour}\n공고 설명: ${description}\n\n등록하시겠습니까?`,
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
          handleClick={handleFormSubmit}
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
