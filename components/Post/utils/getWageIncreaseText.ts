const getWageIncreaseText = (hourlyPay: number, originalHourlyPay: number) => {
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
};

export default getWageIncreaseText;
