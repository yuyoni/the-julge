import closeIcon from "@/public/images/close_icon.svg";
import styled from "@emotion/styled";
import Image from "next/image";
import Notification from "./components/Notification";
import { body2Regular, h4 } from "@/styles/fontsStyle";
import extractNotificationInfo from "./utils/extractNotificationInfo";
import { NotificationItem } from "./types/types";

interface NotificationModalProps {
  handleClickNoti: () => void;
  isModalOpen: boolean;
  notificationList: NotificationItem[];
}

export default function NotificationModal({
  handleClickNoti,
  isModalOpen,
  notificationList,
}: NotificationModalProps) {
  const notifications = extractNotificationInfo(notificationList);

  return (
    isModalOpen && (
      <Wrapper>
        <Container>
          <Title>{`알림 ${notificationList.length}개`}</Title>
          <StyledCloseIcon
            src={closeIcon}
            alt="close_icon"
            onClick={handleClickNoti}
          />
        </Container>
        {notificationList.length ? (
          notifications.map((notification, index) => (
            <Notification key={index} {...notification} />
          ))
        ) : (
          <AlertDiv>알림이 없습니다.</AlertDiv>
        )}
      </Wrapper>
    )
  );
}

const Title = styled.span`
  color: var(--The-julge-black, #111322);
  ${h4}
`;

const AlertDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  ${body2Regular}

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;

const StyledCloseIcon = styled(Image)`
  display: block;

  @media (max-width: 375px) {
    cursor: pointer;
    display: block;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 35px;
  right: 0px;

  display: flex;
  padding: 14px 20px;
  flex-direction: column;
  align-items: flex-start;
  width: 368px;
  gap: 16px;

  border-radius: 10px;
  border: 1px solid var(--The-julge-gray-30, #cbc9cf);
  background-color: #f9f9fb;
  box-shadow: 0px 2px 8px 0px rgba(60, 59, 62, 0.26);

  z-index: 10;

  @media only screen and (max-width: 768px) {
    top: 0px;
    position: fixed;
    box-shadow: none;
    width: 100%;
    height: 100vh;
    border: none;
    border-radius: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
