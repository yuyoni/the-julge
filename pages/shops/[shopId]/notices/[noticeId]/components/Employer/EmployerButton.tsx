import Button from "@/components/Button/Button";
import { UserData } from "@/lib/types/userType";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface EmployerButtonProps {
  isMyNotice: boolean;
  token: string;
  userInfo: UserData | null;
}

export default function EmployerButton({
  isMyNotice,
  token,
  userInfo,
}: EmployerButtonProps) {
  const router = useRouter();

  const handleEditButtonClick = () => {
    // 공고 편집 버튼 클릭 시 실행되는 기능 구현
    // 필요한 로직 구현
  };

  return (
    <>
      {isMyNotice ? (
        <Button
          text="공고 편집하기"
          color="white"
          handleClick={handleEditButtonClick}
        />
      ) : (
        <Button text="공고 편집하기" color="gray" />
      )}
    </>
  );
}