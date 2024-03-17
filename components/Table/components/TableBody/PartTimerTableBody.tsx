import { body1Regular, body2Regular } from "@/styles/fontsStyle";
import { css } from "@emotion/react";
import { Data } from "../..";
import styled from "@emotion/styled";

export default function PartTimerTableBody({
  name,
  date,
  hourlyPay,
  status,
}: Data) {
  return (
    <tbody>
      <TableRow>
        <Cell>{name}</Cell>
        <Cell>{date}</Cell>
        <Cell>{hourlyPay}</Cell>
        <Cell>
          <Status status={status}>{status}</Status>
        </Cell>
      </TableRow>
    </tbody>
  );
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case "승인 완료":
      return css`
        background: var(--The-julge-blue-10);
        color: var(--The-julge-blue-20);
      `;
    case "대기중":
      return css`
        background: var(--The-julge-green-10);
        color: var(--The-julge-green-20);
      `;
    case "거절":
      return css`
        background: var(--The-julge-red);
        color: var(--The-julge-white, #fff);
      `;
  }
};

const TableRow = styled.tr`
  border-bottom: 1px solid var(--The-julge-gray-20);
`;

const Cell = styled.td<{ width?: number }>`
  background: var(--The-julge-gray-05);
  padding: 20px 12px;
  ${body1Regular}
`;

const Status = styled.div<{ status: string }>`
  width: fit-content;
  border-radius: 20px;
  padding: 6px 10px;
  ${body2Regular}

  ${({ status }) => getStatusStyle(status)}
`;
