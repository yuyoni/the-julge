import closeIcon from "@/public/images/close_icon.svg";
import styled from "@emotion/styled";
import Image from "next/image";
import Notification from "./components/Notification";
import { h4 } from "@/styles/fontsStyle";
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
        {notifications.map((notification, index) => (
          <Notification key={index} {...notification} />
        ))}
      </Wrapper>
    )
  );
}

const Title = styled.span`
  color: var(--The-julge-black, #111322);
  ${h4}
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

// const notificationList = [
//   {
//     item: {
//       id: "1c73a86f-eb80-46ed-b0a7-c5b82e06af9e",
//       createdAt: "2024-03-18T09:32:47.392Z",
//       result: "accepted",
//       read: false,
//       application: {
//         item: {
//           id: "f9585caf-f240-4bf7-8e07-2d11f64254a1",
//           status: "accepted",
//         },
//         href: "/api/0-1/the-julge/users/52d15203-7313-444e-86ce-881159b851fb/applications/f9585caf-f240-4bf7-8e07-2d11f64254a1",
//       },
//       shop: {
//         item: {
//           id: "04b0a194-ad51-4606-a597-3a1ff2fd1272",
//           name: "성수동부대찌개",
//           category: "한식",
//           address1: "서울시 성동구",
//           address2: "상원 12길 5",
//           description: "테스트",
//           imageUrl:
//             "https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/5238e2af-7533-4f36-9d86-b14186061ba2-card-default.png",
//           originalHourlyPay: 11000,
//         },
//         href: "/api/0-1/the-julge/shops/04b0a194-ad51-4606-a597-3a1ff2fd1272",
//       },
//       notice: {
//         item: {
//           id: "863dd9b4-0797-4632-895e-7dbfac1e67f9",
//           hourlyPay: 15000,
//           description: "많은 지원 부탁드려요",
//           startsAt: "2024-03-18T15:00:00.000Z",
//           workhour: 3,
//           closed: true,
//         },
//         href: "/api/0-1/the-julge/shops/04b0a194-ad51-4606-a597-3a1ff2fd1272/notices/863dd9b4-0797-4632-895e-7dbfac1e67f9",
//       },
//     },
//     links: [
//       {
//         rel: "read",
//         description: "읽음 처리",
//         method: "PUT",
//         href: "/api/0-1/the-julge/users/52d15203-7313-444e-86ce-881159b851fb/alerts/1c73a86f-eb80-46ed-b0a7-c5b82e06af9e",
//       },
//     ],
//   },
//   {
//     item: {
//       id: "1c73a86f-eb80-46ed-b0a7-c5b82e06af9e",
//       createdAt: "2024-03-18T09:32:47.392Z",
//       result: "거절",
//       read: false,
//       application: {
//         item: {
//           id: "f9585caf-f240-4bf7-8e07-2d11f64254a1",
//           status: "accepted",
//         },
//         href: "/api/0-1/the-julge/users/52d15203-7313-444e-86ce-881159b851fb/applications/f9585caf-f240-4bf7-8e07-2d11f64254a1",
//       },
//       shop: {
//         item: {
//           id: "04b0a194-ad51-4606-a597-3a1ff2fd1272",
//           name: "성수동부대찌개",
//           category: "한식",
//           address1: "서울시 성동구",
//           address2: "상원 12길 5",
//           description: "테스트",
//           imageUrl:
//             "https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/5238e2af-7533-4f36-9d86-b14186061ba2-card-default.png",
//           originalHourlyPay: 11000,
//         },
//         href: "/api/0-1/the-julge/shops/04b0a194-ad51-4606-a597-3a1ff2fd1272",
//       },
//       notice: {
//         item: {
//           id: "863dd9b4-0797-4632-895e-7dbfac1e67f9",
//           hourlyPay: 15000,
//           description: "많은 지원 부탁드려요",
//           startsAt: "2024-03-18T15:00:00.000Z",
//           workhour: 3,
//           closed: true,
//         },
//         href: "/api/0-1/the-julge/shops/04b0a194-ad51-4606-a597-3a1ff2fd1272/notices/863dd9b4-0797-4632-895e-7dbfac1e67f9",
//       },
//     },
//     links: [
//       {
//         rel: "read",
//         description: "읽음 처리",
//         method: "PUT",
//         href: "/api/0-1/the-julge/users/52d15203-7313-444e-86ce-881159b851fb/alerts/1c73a86f-eb80-46ed-b0a7-c5b82e06af9e",
//       },
//     ],
//   },
// ];
