import formatTimeRange from "@/lib/utils/formatTimeRange";
import getElapsedTime from "@/lib/utils/getElapsedTime";
import closeIcon from "@/public/images/close_icon.svg";
import styled from "@emotion/styled";
import Image from "next/image";
import Notification from "./Notification";
import { NotificationItem } from "./types/type";

export default function NotificationModal({
  isModalVisible,
  handleModalClose,
  notificationList,
}: {
  isModalVisible: boolean;
  handleModalClose: (isModalVisible: boolean) => void;
  notificationList: NotificationItem[];
}) {
  const notifications = extractNotificationInfo(notificationList);

  return (
    isModalVisible && (
      <Wrapper>
        <Container>
          <Title>{`알림 ${notificationList.length}개`}</Title>
          <StyledCloseIcon
            src={closeIcon}
            alt="close_icon"
            onClick={() => {
              handleModalClose(false);
            }}
          />
        </Container>
        {notifications.map((notification, index) => (
          <Notification key={index} {...notification} />
        ))}
      </Wrapper>
    )
  );
}

function extractNotificationInfo(notificationList: NotificationItem[]) {
  const notifications = notificationList.map(({ item }) => {
    const { createdAt, result, shop, notice } = item;
    const { name } = shop.item;
    const { startsAt, workhour } = notice.item;

    const elapsedTime = getElapsedTime(createdAt);
    const formattedTime = formatTimeRange(startsAt, workhour);

    return { name, result, elapsedTime, formattedTime };
  });

  return notifications;
}

const Title = styled.span`
  font-size: 20px;
  margin-bottom: 8px;
`;

const StyledCloseIcon = styled(Image)`
  display: none;

  @media (max-width: 375px) {
    cursor: pointer;
    display: block;
  }
`;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 24px 20px;
  flex-direction: column;
  align-items: flex-start;
  width: 368px;
  gap: 16px;

  border-radius: 10px;
  border: 1px solid var(--The-julge-gray-30, #cbc9cf);
  background: var(--The-julge-purple-10, #e9dcf4);
  box-shadow: 0px 2px 8px 0px rgba(120, 116, 134, 0.25);

  @media (max-width: 375px) {
    box-shadow: none;
    width: 100%;
    padding-top: 40px;
    border: none;
    border-radius: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
