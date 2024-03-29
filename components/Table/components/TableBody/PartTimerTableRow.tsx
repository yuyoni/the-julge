import { body1Regular, body2Regular } from "@/styles/fontsStyle";
import { css } from "@emotion/react";
import { Data } from "../..";
import styled from "@emotion/styled";

export default function PartTimerTableRow({
  name,
  date,
  hourlyPay,
  status,
}: Data) {
  return (
    <TableRow>
      <Cell>{name}</Cell>
      <Cell>{date}</Cell>
      <Cell>{hourlyPay}</Cell>
      <Cell>
        <Status status={status}>{getStatusText(status)}</Status>
      </Cell>
    </TableRow>
  );
}

const getStatusText = (status: string) => {
  switch (status) {
    case "accepted":
      return "승인 완료";
    case "pending":
      return "대기중";
    case "rejected":
      return "거절";
    case "canceled":
      return "신청 취소";
  }
};

const TableRow = styled.tr`
  border-bottom: 1px solid var(--The-julge-gray-20);
`;

const Cell = styled.td`
  background: var(--The-julge-gray-05);
  padding: 20px 12px;
  background-color: white;
  ${body1Regular}
`;

const Status = styled.div<{ status: string }>`
  width: fit-content;
  border-radius: 20px;
  padding: 6px 10px;
  ${body2Regular}
  color: var(--The-julge-gray-00);
  background: ${({ status }) => `var(--The-julge-${status})`};
`;
