export default function updateRecentNotices(
  newShopId: string,
  newNoticeId: string,
) {
  const shopIdList = localStorage.getItem("shopIdList");
  const noticeIdList = localStorage.getItem("noticeIdList");

  const newShopIdList = shopIdList ? JSON.parse(shopIdList) : [];
  const newNoticeIdList = noticeIdList ? JSON.parse(noticeIdList) : [];

  const isDuplicate = newNoticeIdList.some(
    (existingNoticeId: string) => existingNoticeId === newNoticeId,
  );

  // 중복된 공지가 없는 경우에만 저장
  if (!isDuplicate) {
    newShopIdList.unshift(newShopId);
    newNoticeIdList.unshift(newNoticeId);

    if (newShopIdList.length > 6 && newNoticeIdList.length > 6) {
      newShopIdList.pop();
      newNoticeIdList.pop();
    }
  }

  localStorage.setItem("shopIdList", JSON.stringify(newShopIdList));
  localStorage.setItem("noticeIdList", JSON.stringify(newNoticeIdList));
}
