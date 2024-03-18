import styled from "@emotion/styled";
import { css } from "@emotion/react";
import getWageIncreaseText from "../utils/getWageIncreaseText";
import { body2Bold } from "@/styles/fontsStyle";

interface WageFlagProps {
  hourlyPay: number;
  originalHourlyPay: number;
}

export default function WageFlag({
  hourlyPay,
  originalHourlyPay,
}: WageFlagProps) {
  const wageIncrease = getWageIncreaseText(hourlyPay, originalHourlyPay);

  return (
    wageIncrease && (
      <WageFlagStyle wageIncrease={wageIncrease}>
        기존시급 {wageIncrease}% ▲
      </WageFlagStyle>
    )
  );
}

const WageFlagStyle = styled.div<{ wageIncrease: number }>`
  position: absolute;
  border-radius: 4px;

  top: 12px;
  left: 12px;
  padding: 6px 12px;
  color: var(--The-julge-gray-00);
  ${body2Bold}

  ${({ wageIncrease }) => {
    if (wageIncrease >= 100) {
      return css`
        background: var(--The-julge-purple-40);
      `;
    } else if (wageIncrease >= 30) {
      return css`
        background: var(--The-julge-purple-30);
      `;
    } else {
      return css`
        background: var(--The-julge-purple-20);
      `;
    }
  }}
`;
