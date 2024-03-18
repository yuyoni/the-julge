import Post from "@/components/Post";
import { useNoticeData } from "@/hooks/useNoticeData";
import formatTimeRange from "@/lib/utils/formatTimeRange";

export default function RecentNotice({
  recentNoticeId,
  index,
}: {
  recentNoticeId: { shopId: string; noticeId: string };
  index: number;
}) {
  const { shopId, noticeId } = recentNoticeId;
  const {
    isLoading,
    error,
    data: noticeData,
  } = useNoticeData(shopId, noticeId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!noticeData) return <p>Data not found</p>;

  const itemDatas = {
    name: noticeData.item.shop.item.name,
    id: noticeData.item.id,
    duration: formatTimeRange(
      noticeData.item.startsAt,
      noticeData.item.workhour,
    ),
    workhour: noticeData.item.workhour,
    address: noticeData.item.shop.item.address1,
    hourlyPay: noticeData.item.hourlyPay,
    originalHourlyPay: noticeData.item.shop.item.originalHourlyPay,
    imageUrl: noticeData.item.shop.item.imageUrl,
    closed: noticeData.item.closed,
    shopId: noticeData.item.shop.item.id,
  };

  console.log(itemDatas.duration);

  return <Post item={itemDatas} />;
}
