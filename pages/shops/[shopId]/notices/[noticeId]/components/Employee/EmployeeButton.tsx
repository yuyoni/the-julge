import Button, { ButtonProps } from "@/components/Button/Button";
import Modal from "@/components/Modal";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

interface EmployeeButtonProps {
  isClosed: boolean;
}

export default function EmployeeButton({ isClosed }: EmployeeButtonProps) {
  const router = useRouter();
  const shopId = router.query.shopId as string;
  const noticeId = router.query.noticeId as string;

  const isProfileExist = true; // 추후 유저 정보 받으면 프로필 있는지 검사하는 코드로 수정

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

  return (
    <>
      <Button {...buttonProps} />
      {showApplyModal && (
        <Dimmed>
          <Modal
            modalIcon="check"
            modalText="신청하시겠습니까?"
            yesButtonText="신청하기"
            handleYesClick={() => {
              // 신청 요청 보내고 성공하면 아래 로직 실행
              setShowApplyModal(false);
              setIsApplied(true);
            }}
            handleNoClick={() => {
              setShowApplyModal(false);
            }}
          />
        </Dimmed>
      )}
      {showCancelModal && (
        <Dimmed>
          <Modal
            modalIcon="check"
            modalText="취소하시겠습니까?"
            yesButtonText="취소하기"
            handleYesClick={() => {
              // 취소 요청 보내고 성공하면 아래 로직실행
              setShowCancelModal(false);
              setIsApplied(false);
            }}
            handleNoClick={() => {
              setShowCancelModal(false);
            }}
          />
        </Dimmed>
      )}
      {showProfileCheckModal && (
        <Dimmed>
          <Modal
            modalIcon="alert"
            modalText="내 프로필을 먼저 등록해주세요"
            handleConfirmClick={() => {
              setShowProfileCheckModal(false);
              router.push("/myprofile");
            }}
          />
        </Dimmed>
      )}
    </>
  );
}

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
