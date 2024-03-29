import { body2Regular } from "@/styles/fontsStyle";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

type PageIndexProps = {
  pageIndex: number;
  onClick: (page: number) => void;
  page: number;
};

export default function PageButton({
  pageIndex,
  onClick,
  page,
}: PageIndexProps) {
  const isNow = page === pageIndex;

  const handleClick = () => {
    onClick(pageIndex);
  };

  return (
    <StyledButton isnow={isNow} disabled={isNow} onClick={handleClick}>
      {pageIndex}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ isnow: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 12px;
  ${body2Regular}

  ${({ isnow }) =>
    isnow
      ? css`
          background: var(--The-julge-green-20);
          color: var(----The-julge-white, #fff);
        `
      : css`
          background: var(--The-julge-white);
          color: var(----The-julge-black);
        `}

  &:hover {
    ${({ isnow }) =>
      isnow ||
      css`
        background: var(--The-julge-green-05);
      `}
  }
`;
