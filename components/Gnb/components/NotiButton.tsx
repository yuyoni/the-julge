import NotificationModal from "@/components/NotificationModal";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

export default function NotiButton({ activeStatus }: { activeStatus: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {isModalOpen && <NotificationModal handleClickNoti={handleClickNoti} />}
      </Button>
    </>
  );
}

const Button = styled.button`
  position: relative;
`;
