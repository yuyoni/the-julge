import { h1Regular, h3 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import HistoryTable from "./HistoryTable";

export default function ApplyHistory() {
  const history = false;
  return (
    <Wrapper>
      <Title>신청 내역</Title>
      <HistoryTable history={history} />
    </Wrapper>
  );
}

const Title = styled.span`
  ${h1Regular}

  @media (max-width: 767px) {
    ${h3}
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;
  background-color: var(--The-julge-gray-05);
  font-size: 16px;
  padding: 60px 238px 120px;

  @media (max-width: 1023px) {
    padding: 60px 32px 120px;
  }

  @media (max-width: 767px) {
    padding: 40px 12px 80px;
  }
`;
