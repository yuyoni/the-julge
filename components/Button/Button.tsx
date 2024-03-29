import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { body2Regular } from "@/styles/fontsStyle";

//TODO handleClick 확인 필요! ()에서 (e:any)로 변경해도 되는지?
export interface ButtonProps {
  text: string;
  handleClick?: (e: any) => void;
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
        color: var(--The-julge-rejected);
        border: 1px solid var(--The-julge-rejected);

        :active {
          background: var(--The-julge-rejected);
        }
      `;
    case "accept":
      return css`
        background: var(--The-julge-gray-00);
        color: var(--The-julge-accepted);
        border: 1px solid var(--The-julge-accepted);

        :active {
          background: var(--The-julge-accepted);
        }
      `;
    case "white":
      return css`
        background: var(--The-julge-gray-00);
        color: var(--The-julge-green-30);
        border: 1px solid var(--The-julge-green-30);

        :hover {
          background: var(--The-julge-gray-10);
        }
        :active {
          background: var(--The-julge-gray-10);
          font-size: 13px;
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
        background: var(--The-julge-green-20);
        color: var(--The-julge-gray-00);
        border: 1px solid var(--The-julge-green-20);

        :hover {
          background: var(--The-julge-green-40);
          border: 1px solid var(--The-julge-green-40);
        }
        :active {
          background: var(--The-julge-green-40);
          border: 1px solid var(--The-julge-green-40);
          font-size: 13px;
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
