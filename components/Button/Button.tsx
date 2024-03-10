import styled from "@emotion/styled";
import { css } from "@emotion/react";

export default function Button({
  text,
  color = "colored",
  handleClick,
}: {
  text: string;
  handleClick?: () => void;
  color?: "colored" | "white" | "gray";
}) {
  return (
    <Container onClick={handleClick} $color={color}>
      {text}
    </Container>
  );
}

const getColorStyles = (color: string) => {
  switch (color) {
    case "white":
      return css`
        background: var(--The-julge-gray-00, #fff);
        color: var(--The-julge-purple-40, #905cb9);
        border: 1px solid var(--The-julge-purple-40, #905cb9);

        :active {
          background: var(--The-julge-purple-10, #f2f2f3);
        }
      `;
    case "gray":
      return css`
        background: var(--The-julge-gray-40, #a4a1aa);
        color: var(--The-julge-gray-00, #fff);
        cursor: not-allowed;
      `;
    default:
      return css`
        background: var(--The-julge-purple-40, #905cb9);
        color: var(--The-julge-gray-00, #fff);

        :active {
          background: #6a4487;
        }
      `;
  }
};

const Container = styled.button<{
  $color?: "colored" | "white" | "gray";
}>`
  display: inline-flex;
  padding: 14px 45px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 100%;

  ${({ $color }) => getColorStyles($color || "colored")}
`;
