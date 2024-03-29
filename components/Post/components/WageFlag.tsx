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
    <WageFlagStyle wageIncrease={wageIncrease}>
      {wageIncrease ? (
        <>
          <span>{`기존시급보다 ${wageIncrease}% `}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 22"
            fill="none"
          >
            <path
              d="M12.5 16.6668H7.50001V10.0001H3.46667L10 3.4668L16.5333 10.0001H12.5V16.6668Z"
              fill="white"
            />
          </svg>
        </>
      ) : (
        <span>{`기존시급과 동일`}</span>
      )}
    </WageFlagStyle>
  );
}

const WageFlagStyle = styled.div<{
  wageIncrease: number | null;
}>`
  display: flex;
  align-items: center;
  border-radius: 28px;
  max-width: 160px;
  padding: 6px 12px;
  color: var(--The-julge-gray-00);
  ${body2Bold}

  ${({ wageIncrease }) => {
    if (!wageIncrease) {
      return css`
        background: var(--The-julge-green-10);
      `;
    }
    if (wageIncrease >= 100) {
      return css`
        background: var(--The-julge-green-40);
      `;
    } else if (wageIncrease >= 30) {
      return css`
        background: var(--The-julge-green-30);
      `;
    } else {
      return css`
        background: var(--The-julge-green-20);
      `;
    }
  }}

  @media screen and (max-width : 1023px) {
    display: none;
  }
`;
