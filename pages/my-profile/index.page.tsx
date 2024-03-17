import Layout from "@/components/Layout";
import Profile from "./Profile";
import ApplyHistory, { ApplyHistoryProps } from "./ApplyHistory";
import styled from "@emotion/styled";

export default function MyProfile() {
  // 7~ 96라인까지는 테이블 테스트용으로 임시로 만든 파일들입니다.
  const tempHistories = [
    {
      id: "1",
      name: "HS 과일주스1",
      date: "2023-01-12 10:00 ~ 12:00 (2시간)",
      hourlyPay: "15,000원",
      status: "승인 완료",
    },
    {
      id: "2",
      name: "HS 과일주스2",
      date: "2023-01-12 10:00 ~ 12:00 (2시간)",
      hourlyPay: "15,000원",
      status: "대기중",
    },
    {
      id: "3",
      name: "HS 과일주스3",
      date: "2023-01-12 10:00 ~ 12:00 (2시간)",
      hourlyPay: "15,000원",
      status: "거절",
    },
    {
      id: "4",
      name: "HS 과일주스1",
      date: "2023-01-12 10:00 ~ 12:00 (2시간)",
      hourlyPay: "15,000원",
      status: "승인 완료",
    },
    {
      id: "5",
      name: "HS 과일주스2",
      date: "2023-01-12 10:00 ~ 12:00 (2시간)",
      hourlyPay: "15,000원",
      status: "대기중",
    },
    {
      id: "6",
      name: "HS 과일주스3",
      date: "2023-01-12 10:00 ~ 12:00 (2시간)",
      hourlyPay: "15,000원",
      status: "거절",
    },
    {
      id: "7",
      name: "HS 과일주스3",
      date: "2023-01-12 10:00 ~ 12:00 (2시간)",
      hourlyPay: "15,000원",
      status: "거절",
    },
  ];

  const tempApplication = [
    {
      id: "1",
      name: "HS 과일주스1",
      description: "참일꾼",
      phoneNumber: "010-1234-5678",
      status: "승인 완료",
    },
    {
      id: "2",
      name: "HS 과일주스2",
      description: "참일꾼",
      phoneNumber: "010-1234-5678",
      status: "대기중",
    },
    {
      id: "3",
      name: "HS 과일주스3",
      description: "참일꾼",
      phoneNumber: "010-1234-5678",
      status: "거절",
    },
  ];

  const tempResponse: ApplyHistoryProps = {
    type: "employee",
    limit: 5,
    count: tempHistories.length,
    items: tempHistories,
  };

  const tempResponseOwner: ApplyHistoryProps = {
    type: "employer",
    limit: 5,
    count: tempApplication.length,
    items: tempApplication,
  };

  return (
    <Layout>
      <Profile />
      <Wrapper>
        <ApplyHistory {...tempResponseOwner} />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background-color: var(--The-julge-gray-05);
`;
