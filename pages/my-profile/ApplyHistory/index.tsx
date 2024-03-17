import { h1Regular, h3 } from "@/styles/fontsStyle";
import { Data } from "@/components/Table";
import styled from "@emotion/styled";
import HistoryTable from "./HistoryTable";

export type ApplyHistoryProps = {
  type: "employer" | "employee";
  limit: number;
  count: number;
  items: Data[];
};

export default function ApplyHistory({
  type,
  limit,
  count,
  items,
}: ApplyHistoryProps) {
  return (
    <Wrapper>
      <Title>신청 내역</Title>
      <HistoryTable type={type} limit={limit} count={count} histories={items} />
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
  max-width: 964px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;
  font-size: 16px;
  padding: 60px 0 120px;

  @media (max-width: 1023px) {
    padding: 60px 32px 120px;
  }

  @media (max-width: 767px) {
    padding: 40px 12px 80px;
  }
`;
