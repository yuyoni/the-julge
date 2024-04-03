export default function updateRecentNotices(noticeHref: string) {
  const noticeHrefList = localStorage.getItem("noticeHrefList");
  const newNoticeHrefList = noticeHrefList ? JSON.parse(noticeHrefList) : [];

  const isDuplicate = newNoticeHrefList.some(
    (existingNoticeHref: string) => existingNoticeHref === noticeHref
  );

  if (!isDuplicate) {
    newNoticeHrefList.unshift(noticeHref);

    if (newNoticeHrefList.length > 6) {
      newNoticeHrefList.pop();
    }
  }

  localStorage.setItem("noticeHrefList", JSON.stringify(newNoticeHrefList));
}
