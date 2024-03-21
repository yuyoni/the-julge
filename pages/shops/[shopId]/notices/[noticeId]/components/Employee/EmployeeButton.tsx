import Button, { ButtonProps } from "@/components/Button/Button";
import fetchData from "@/lib/apis/fetchData";
import { ApplicationsResponse, ApplyResponse } from "@/lib/types/Application";
import { UserData } from "@/lib/types/userType";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ModalContent from "../ModalContent";
import { useToast } from "@/contexts/ToastContext";

interface EmployeeButtonProps {
  applyHref: string;
  isClosed: boolean;
  isOutdated: boolean;
  token: string;
  userInfo: UserData | null;
}

export default function EmployeeButton({
  applyHref,
  isClosed,
  isOutdated,
  token,
  userInfo,
}: EmployeeButtonProps) {
  const { showToast } = useToast();
  const router = useRouter();
  const { shopId, noticeId } = router.query;

  const isProfileExist = userInfo?.item.name;

  const [applicationId, setApplicationId] = useState<string>("");
  const [isApplied, setIsApplied] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showProfileCheckModal, setShowProfileCheckModal] = useState(false);

  useEffect(() => {
    if (token && userInfo) {
      getUserApplications();
    }
  }, [userInfo, token]);

  const getUserApplications = async () => {
    try {
      const applicationData = await fetchData<ApplicationsResponse>({
        param: `/shops/${shopId}/notices/${noticeId}/applications?limit=100`,
        method: "get",
      });

      if (userInfo) {
        const userApply = applicationData.items.filter((apply) => {
          return userInfo.item.id === apply.item.user.item.id;
        });

        if (userApply.length !== 0 && userApply[0].item.status === "pending") {
          setIsApplied(true);
          setApplicationId(userApply[0].item.id);
        }
      }
    } catch (error: any) {
      const { message } = error.response.data;
      alert(message);
    }
  };

  const handleApplyButtonClick = () => {
    if (isProfileExist) {
      setShowApplyModal(true);
      getUserApplications();
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
    case isOutdated:
      buttonProps = {
        text: "기간 종료",
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
    try {
      const response = await fetchData<ApplyResponse>({
        param: applyHref,
        method: "post",
        token: token,
      });
      setShowApplyModal(false);
      setIsApplied(true);
      getUserApplications();
      showToast("신청완료!");
    } catch (error: any) {
      const { message } = error.response.data;
      alert(message);
    }
  };

  const handleCancel = async () => {
    try {
      const response = await fetchData<ApplyResponse>({
        param: `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
        method: "put",
        requestData: { status: "canceled" },
        token: token,
      });
      setShowCancelModal(false);
      setIsApplied(false);
      showToast("취소했어요");
    } catch (error: any) {
      const { message } = error.response.data;
      alert(message);
    }
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
            router.push("/my-profile");
          }}
        />
      )}
    </>
  );
}
