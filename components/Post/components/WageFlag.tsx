import styled from "@emotion/styled";
import getWageIncreaseText from "../utils/getWageIncreaseText";

interface WageFlagProps {
  hourlyPay: number;
  originalHourlyPay: number;
}

export default function WageFlag({
  hourlyPay,
  originalHourlyPay,
}: WageFlagProps) {
  const wageIncreaseText = getWageIncreaseText(hourlyPay, originalHourlyPay);

  return wageIncreaseText && <WageFlagStyle>{wageIncreaseText}</WageFlagStyle>;
}

const WageFlagStyle = styled.div`
  position: absolute;
  border-radius: 4px;
  background: var(--The-julge-purple-40, #905cb9);
  color: white;
  top: 12px;
  left: 12px;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 15px;
`;
