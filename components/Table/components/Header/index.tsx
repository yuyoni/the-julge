import { body2Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";

export default function TableHeader() {
  return (
    <thead>
      <HeadRow>
        <Cell>가게</Cell>
        <Cell>일자</Cell>
        <Cell>시급</Cell>
        <Cell>상태</Cell>
      </HeadRow>
    </thead>
  );
}

const Cell = styled.th<{ width?: number }>`
  padding: 14px 12px;
  text-align: left;
  ${body2Regular}
`;

const HeadRow = styled.tr`
  border-bottom: 1px solid var(--The-julge-gray-20);
  border-radius: 10px;
  background-color: var(--The-julge-purple-10);
`;
