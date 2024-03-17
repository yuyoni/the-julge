const getWageIncreaseText = (hourlyPay: number, originalHourlyPay: number) => {
  const increaseRate =
    ((hourlyPay - originalHourlyPay) / originalHourlyPay) * 100;

  //화면에 노출될 badge 최대값
  if (increaseRate >= 300) {
    return 300;
  }
  if (increaseRate >= 10) {
    return Math.floor(increaseRate / 10) * 10;
  }
  return null;
};

export default getWageIncreaseText;
