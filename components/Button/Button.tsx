import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { body2Regular } from "@/styles/fontsStyle";

export interface ButtonProps {
  text: string;
  handleClick?: () => void;
  color?: "colored" | "white" | "gray" | "reject" | "accept";
  width?: number;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  text,
  color = "colored",
  handleClick,
  width,
  type = "button",
}: ButtonProps) {
  return (
    <Wrapper $width={width}>
      <ButtonStyle onClick={handleClick} $color={color} type={type}>
        {text}
      </ButtonStyle>
    </Wrapper>
  );
}

const getColorStyles = (color: string) => {
  switch (color) {
    case "reject":
      return css`
        background: var(--The-julge-gray-00);
        color: var(--The-julge-red);
        border: 1px solid var(--The-julge-red);

        :active {
          background: #fbb7af;
        }
      `;
    case "accept":
      return css`
        background: var(--The-julge-gray-00);
        color: var(--The-julge-blue-20);
        border: 1px solid var(--The-julge-blue-20);

        :active {
          background: var(--The-julge-blue-10);
        }
      `;
    case "white":
      return css`
        background: var(--The-julge-gray-00);
        color: var(--The-julge-purple-40);
        border: 1px solid var(--The-julge-purple-40);

        :active {
          background: var(--The-julge-purple-10);
        }
      `;
    case "gray":
      return css`
        background: var(--The-julge-gray-40);
        color: var(--The-julge-gray-00);
        border: 1px solid var(--The-julge-gray-40);
        cursor: not-allowed;
      `;
    default:
      return css`
        background: var(--The-julge-purple-40);
        color: var(--The-julge-gray-00);
        border: 1px solid var(--The-julge-purple-40);

        :active {
          background: #6a4487;
        }
      `;
  }
};

const Wrapper = styled.div<{ $width?: number }>`
  width: ${({ $width }) => ($width ? `${$width}px` : "100%")};
`;

const ButtonStyle = styled.button<{
  $color?: "colored" | "white" | "gray" | "reject" | "accept";
}>`
  display: inline-flex;
  padding: 12px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 100%;
  ${body2Regular}

  ${({ $color }) => getColorStyles($color || "colored")}
`;
