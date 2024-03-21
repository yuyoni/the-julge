import NotificationModal from "@/components/NotificationModal";
import useCookie from "@/hooks/useCookies";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import { useNoticesData } from "../hook/useUserQuery";

export default function NotiButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { jwt, id } = useCookie();
  const result = useNoticesData(id, jwt);
  const activeStatus = result?.data?.count ? "active" : "inactive";

  const notificationList = result?.data?.items ?? [];

  const handleClickNoti = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <Button type="button" onClick={handleClickNoti}>
        <Image
          src={`/images/notification-${activeStatus}.svg`}
          alt="notification"
          width={20}
          height={20}
        />

        <NotificationModal
          handleClickNoti={handleClickNoti}
          isModalOpen={isModalOpen}
          notificationList={notificationList}
        />
      </Button>
    </>
  );
}

const Button = styled.button`
  position: relative;
`;
