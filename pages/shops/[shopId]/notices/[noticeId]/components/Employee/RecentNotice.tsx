import Post from "@/components/Post";
import SkeletonUI from "@/components/Skeleton";
import useFetchData from "@/hooks/useFetchData";
import { NoticeList } from "@/lib/types/NoticeTypes";
import formatTimeRange from "@/lib/utils/formatTimeRange";

export default function RecentNotice({
  noticeHref,
  index,
}: {
  noticeHref: string;
  index: number;
}) {
  const {
    isLoading,
    error,
    data: noticeData,
  } = useFetchData<NoticeList>({
    href: noticeHref,
    queryKey: "NoticeInfo",
    conditionValue: !!noticeHref,
  });

  if (isLoading) return <SkeletonUI height={328} />;
  if (error) return <p>recentNotice Data fetching error</p>;
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
    startsAt: noticeData.item.startsAt,
  };

  return <Post item={itemDatas} />;
}
