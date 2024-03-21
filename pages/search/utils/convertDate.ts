const convertDateNow = (inputDate: string) => {
  const now = new Date();
  let inputDateTime = new Date(inputDate);

  // 입력된 날짜가 오늘인 경우 1시간 추가
  if (inputDateTime.toDateString() === now.toDateString()) {
    inputDateTime.setHours(inputDateTime.getHours() + 1);
  } else {
    // 입력된 날짜가 내일 이후인 경우
    inputDateTime = new Date(inputDateTime.toDateString());
  }

  const year = inputDateTime.getFullYear();
  const month = String(inputDateTime.getMonth() + 1).padStart(2, "0");
  const day = String(inputDateTime.getDate()).padStart(2, "0");
  const hours = String(inputDateTime.getHours()).padStart(2, "0");
  const minutes = String(inputDateTime.getMinutes()).padStart(2, "0");
  const seconds = String(inputDateTime.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
};

export default convertDateNow;
