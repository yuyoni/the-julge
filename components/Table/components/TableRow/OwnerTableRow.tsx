import { body1Regular, body2Regular } from "@/styles/fontsStyle";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "@/components/Button/Button";

type OwnerTableBodyProps = {
  key?: string;
  name?: string;
  description?: string;
  phoneNumber?: string;
  status?: string;
  handlePermitClick?: () => void;
  handleDenyClick?: () => void;
};

export default function OwnerTableRow({
  name,
  description,
  phoneNumber,
  status,
  handlePermitClick,
  handleDenyClick,
}: OwnerTableBodyProps) {
  return (
    <TableRow>
      <Cell>{name}</Cell>
      <Cell>
        <Wrapper>{description}</Wrapper>
      </Cell>
      <Cell>{phoneNumber}</Cell>
      <Cell>
        {status === "대기중" ? (
          <ButtonContainer>
            <ButtonWrapper>
              <Button
                handleClick={handlePermitClick}
                text="승인하기"
                color="white"
              />
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                handleClick={handleDenyClick}
                text="거절하기"
                color="white"
              />
            </ButtonWrapper>
          </ButtonContainer>
        ) : (
          <Status status={status}>{status}</Status>
        )}
      </Cell>
    </TableRow>
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

const Cell = styled.td`
  background: var(--The-julge-gray-05);
  padding: 20px 12px;
  ${body1Regular}
`;

const Wrapper = styled.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ButtonWrapper = styled.div`
  width: 92px;
`;

const Status = styled.div<{ status?: string }>`
  width: fit-content;
  border-radius: 20px;
  padding: 6px 10px;
  ${body2Regular}

  ${({ status }) => getStatusStyle(status as string)}
`;
