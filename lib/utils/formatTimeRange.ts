export default function formatTimeRange(startsAt: string, workhour: number) {
  const startsTime = new Date(startsAt);
  const endsTime = new Date(startsTime.getTime() + workhour * 60 * 60 * 1000);

  const formattedStartsAt = formatDate(startsTime);
  const formattedEndsAt = formatDate(endsTime);

  return `(${formattedStartsAt} ~ ${formattedEndsAt})`;
}

function formatDate(date: Date): string {
  return date
    .toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })
    .replace(". ", "-")
    .replace(". ", "-")
    .replace(".", "");
}