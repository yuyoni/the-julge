const getWageIncreaseText = (hourlyPay: number, originalHourlyPay: number) => {
  const increaseRate =
    ((hourlyPay - originalHourlyPay) / originalHourlyPay) * 100;

  if (increaseRate >= 200) {
    return 200;
  } else if (increaseRate >= 100) {
    return 100;
  } else if (increaseRate >= 50) {
    return 50;
  } else if (increaseRate >= 30) {
    return 30;
  } else if (increaseRate >= 10) {
    return 10;
  }
  return null;
};

export default getWageIncreaseText;
