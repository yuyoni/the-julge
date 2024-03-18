import Button, { ButtonProps } from "@/components/Button/Button";
import { useRouter } from "next/router";
import { useState } from "react";

interface EmployeeButtonProps {
  isClosed: boolean;
}

export default function EmployeeButton({ isClosed }: EmployeeButtonProps) {
  const router = useRouter();

  const [isProfileMissing, setIsProfileMissing] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const handleProfileRegistration = () => {
    router.push("/myprofile"); // 임시 경로
  };

  const handleApplyButtonClick = () => {
    // 신청 버튼 클릭 시 실행되는 기능 구현
    console.log("Apply button clicked");
    // 필요한 로직 구현
  };

  const handleCancelButtonClick = () => {
    // 취소 버튼 클릭 시 실행되는 기능 구현
    console.log("Cancel button clicked");
    // 필요한 로직 구현
  };

  let buttonProps: ButtonProps;

  switch (true) {
    case isProfileMissing:
      buttonProps = {
        text: "프로필 등록하기",
        color: "white",
        handleClick: handleProfileRegistration,
      };
      break;
    case isClosed:
      buttonProps = {
        text: "신청 마감",
        color: "gray",
      };
      break;
    case isApplied:
      buttonProps = {
        text: "취소하기",
        color: "white",
        handleClick: handleCancelButtonClick,
      };
      break;
    default:
      buttonProps = {
        text: "신청하기",
        color: "colored",
        handleClick: handleApplyButtonClick,
      };
  }

  return <Button {...buttonProps} />;
}
