import Layout from "@/components/Layout";
import Profile from "./Profile";
import ApplyHistory from "./ApplyHistory";
import styled from "@emotion/styled";

export default function MyProfile() {
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
  ];

  const tempResponse = {
    limit: 5,
    count: tempHistories.length,
    items: tempHistories,
  };

  return (
    <Layout>
      <Profile />
      <Wrapper>
        <ApplyHistory {...tempResponse} />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background-color: var(--The-julge-gray-05);
`;
