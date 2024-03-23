import { NoticeItem } from "@/lib/types/NoticeTypes";
import formatTimeRange from "@/lib/utils/formatTimeRange";
import { renderPosts } from "../../utils/renderPosts";

interface PostListProps {
  isRecommend: boolean;
  noticeArray: NoticeItem[];
  address?: string;
}

export default function PostList({
  isRecommend = false,
  noticeArray,
  address,
}: PostListProps) {
  const itemDatas = noticeArray.map((notice: NoticeItem) => ({
    name: notice.shop.item.name,
    id: notice.id,
    duration: formatTimeRange(notice.startsAt, notice.workhour),
    workhour: notice.workhour,
    address: notice.shop.item.address1,
    hourlyPay: notice.hourlyPay,
    originalHourlyPay: notice.shop.item.originalHourlyPay,
    imageUrl: notice.shop.item.imageUrl,
    closed: notice.closed,
    shopId: notice.shop.item.id,
    startsAt: notice.startsAt,
  }));

  return renderPosts(itemDatas, isRecommend, address);
}
