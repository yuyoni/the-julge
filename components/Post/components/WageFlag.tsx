import styled from "@emotion/styled";

function getWageIncreaseText(hourlyPay: number, originalHourlyPay: number) {
  const increaseRate =
    ((hourlyPay - originalHourlyPay) / originalHourlyPay) * 100;

  if (increaseRate >= 100) {
    return "시급 100% ▲";
  } else if (increaseRate >= 50) {
    return "시급 50% ▲";
  } else if (increaseRate >= 30) {
    return "시급 30% ▲";
  }
  return null;
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

export default function WageFlag({
  hourlyPay,
  originalHourlyPay,
}: {
  hourlyPay: number;
  originalHourlyPay: number;
}) {
  const wageIncreaseText = getWageIncreaseText(hourlyPay, originalHourlyPay);

  return wageIncreaseText && <WageFlagStyle>{wageIncreaseText}</WageFlagStyle>;
}
