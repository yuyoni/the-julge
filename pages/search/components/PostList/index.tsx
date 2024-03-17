import Post, { PostProps } from "@/components/Post";
import { utilFormatDuration } from "@/lib/utils/formatTimeRange";
import type { NoticeItem } from "@/types/PostType";

interface PostListProps {
  isRecommend: boolean;
  noticeArray: NoticeItem[];
}

export default function PostList({
  isRecommend = false,
  noticeArray,
}: PostListProps) {
  const itemDatas = noticeArray.map((notice: NoticeItem) => ({
    name: notice.shop.item.name,
    id: notice.id,
    duration: utilFormatDuration(notice.startsAt, notice.workhour),
    workhour: notice.workhour,
    address: notice.shop.item.address1,
    hourlyPay: notice.hourlyPay,
    originalHourlyPay: notice.shop.item.originalHourlyPay,
    imageUrl: notice.shop.item.imageUrl,
    closed: notice.closed,
    shopId: notice.shop.item.id,
  }));

  if (isRecommend) {
    const filteredItemDatas = itemDatas
      .filter((item) => !item.closed)
      .slice(0, 3);

    return filteredItemDatas.map((item: PostProps) => (
      <Post key={item.id} item={item} />
    ));
  }

  return itemDatas.map((item: PostProps) => <Post key={item.id} item={item} />);
}