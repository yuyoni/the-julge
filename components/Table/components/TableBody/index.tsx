import { body2Regular } from "@/styles/fontsStyle";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { History } from "../..";

export default function TableBody({ name, date, hourlyPay, status }: History) {
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

const Status = styled.div<{ status: string }>`
  width: fit-content;
  border-radius: 20px;
  padding: 6px 10px;
  ${body2Regular}

  ${({ status }) => getStatusStyle(status)}
`;

const Cell = styled.td<{ width?: number }>`
  padding: 20px 12px;
`;

const TableRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid var(--The-julge-gray-20);
`;
