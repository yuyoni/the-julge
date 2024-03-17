import { body1Regular, body2Regular } from "@/styles/fontsStyle";
import { css } from "@emotion/react";
import { Data } from "../..";
import styled from "@emotion/styled";
import Button from "@/components/Button/Button";

export default function OwnerTableBody({
  name,
  description,
  phoneNumber,
  status,
}: Data) {
  return (
    <tbody>
      <TableRow>
        <Cell>{name}</Cell>
        <Cell>{description}</Cell>
        <Cell>{phoneNumber}</Cell>
        <Cell>
          {status === "대기중" ? (
            <ButtonContainer>
              <ButtonWrapper>
                <Button text="승인하기" color="white" />
              </ButtonWrapper>
              <ButtonWrapper>
                <Button text="거절하기" color="white" />
              </ButtonWrapper>
            </ButtonContainer>
          ) : (
            <Status status={status}>{status}</Status>
          )}
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
  padding: 20px 12px;
  ${body1Regular}
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ButtonWrapper = styled.div`
  width: 92px;
`;

const Status = styled.div<{ status: string }>`
  width: fit-content;
  border-radius: 20px;
  padding: 6px 10px;
  ${body2Regular}

  ${({ status }) => getStatusStyle(status)}
`;
