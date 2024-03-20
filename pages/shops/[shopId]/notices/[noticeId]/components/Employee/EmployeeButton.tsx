import Button, { ButtonProps } from "@/components/Button/Button";
import { useUser } from "@/contexts/UserContext";
import useCookie from "@/hooks/useCookies";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalContent from "../ModalContent";
import fetchData from "@/lib/apis/fetchData";
import { ApplyResponse } from "@/lib/types/Application";

interface EmployeeButtonProps {
  applyHref: string;
  isClosed: boolean;
}

export default function EmployeeButton({
  applyHref,
  isClosed,
}: EmployeeButtonProps) {
  const { userInfo } = useUser();
  const { jwt: token } = useCookie();
  const router = useRouter();

  // const isProfileExist = userInfo?.item.name;
  const isProfileExist = true; // 임시로 true로 고정

  const [cancelRequestUrl, setCancelRequestUrl] = useState<string>("");
  const [isApplied, setIsApplied] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showProfileCheckModal, setShowProfileCheckModal] = useState(false);

  const handleApplyButtonClick = () => {
    if (isProfileExist) {
      setShowApplyModal(true);
    } else {
      setShowProfileCheckModal(true);
    }
  };

  const handleCancelButtonClick = () => {
    setShowCancelModal(true);
  };

  let buttonProps: ButtonProps;

  switch (true) {
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

  const handleApply = async () => {
    // 신청 요청 보내고 성공하면 아래 로직 실행
    const response = await fetchData<ApplyResponse>({
      param: applyHref,
      method: "post",
      token: token,
    });
    setCancelRequestUrl(response.links[0].href.slice(19));
    setShowApplyModal(false);
    setIsApplied(true);
  };

  const handleCancel = async () => {
    // 취소 요청 보내고 성공하면 아래 로직실행
    const response = await fetchData<ApplyResponse>({
      param: cancelRequestUrl,
      method: "put",
      requestData: { status: "canceled" },
      token: token,
    });
    setShowCancelModal(false);
    setIsApplied(false);
  };

  return (
    <>
      <Button {...buttonProps} />
      {showApplyModal && (
        <ModalContent
          setModalState={setShowApplyModal}
          modalIcon="check"
          modalText="신청하시겠습니까?"
          yesButtonText="신청하기"
          handleYesClick={handleApply}
          handleNoClick={() => {
            setShowApplyModal(false);
          }}
        />
      )}
      {showCancelModal && (
        <ModalContent
          setModalState={setShowCancelModal}
          modalIcon="check"
          modalText="취소하시겠습니까?"
          yesButtonText="취소하기"
          handleYesClick={handleCancel}
          handleNoClick={() => {
            setShowCancelModal(false);
          }}
        />
      )}
      {showProfileCheckModal && (
        <ModalContent
          setModalState={setShowProfileCheckModal}
          modalIcon="alert"
          modalText="내 프로필을 먼저 등록해주세요"
          handleYesClick={() => {
            setShowProfileCheckModal(false);
            router.push("/myprofile");
          }}
        />
      )}
    </>
  );
}
