export function formatTimeRange(startsAt: string, workhour: number) {
  const startsTime = new Date(startsAt);
  const endsTime = new Date(startsTime.getTime() + workhour * 60 * 60 * 1000);

  const formattedStartsAt = formatDate(startsTime).slice(0, -3);
  const formattedEndsAt = formatDate(endsTime).slice(0, -3);

  return `${formattedStartsAt} ~ ${formattedEndsAt}`;
}

function formatDate(date: Date): string {
  return date
    .toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })
    .replace(". ", "-")
    .replace(". ", "-")
    .replace(".", "");
}

export const utilFormatDuration = (duration: string, workhour: number) => {
  const date = duration.slice(0, 10).replace(/-/g, ".");
  const hours = parseInt(duration.slice(11, 13));
  const minutes = duration.slice(14, 16);

  let endHours = hours + workhour;

  const startTime = `${hours.toString().padStart(2, "0")}:${minutes}`;
  const endTime = `${endHours}:${minutes}`;

  return `${date} ${startTime}~${endTime}`;
};
