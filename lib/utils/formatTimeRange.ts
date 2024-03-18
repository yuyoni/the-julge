export default function formatTimeRange(startsAt: string, workhour: number) {
  const startsTime = new Date(startsAt);
  const endsTime = new Date(startsTime.getTime() + workhour * 60 * 60 * 1000);

  const formattedStartsAt = formatDate(startsTime, true);
  const formattedEndsAt = formatDate(endsTime, false);

  return `${formattedStartsAt} ~ ${formattedEndsAt}`;
}

function formatDate(date: Date, isStartTime: boolean): string {
  const newDate = date.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return isStartTime
    ? `${year}-${month}-${day} ${hours}:${minutes}`
    : `${hours}:${minutes}`;
}
