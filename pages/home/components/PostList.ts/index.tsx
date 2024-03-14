import Post, { PostProps } from "@/components/Post";
import formatTimeRange from "@/lib/utils/formatTimeRange";
import { NoticeItem } from "@/types/PostType";

interface PostListProps {
  noticeArray: NoticeItem[];
}

export default function PostList({ noticeArray }: PostListProps) {
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
  }));

  const filteredItemDatas = itemDatas
    .filter((item) => !item.closed)
    .slice(0, 3);

  return filteredItemDatas.map((item: PostProps) => (
    <Post key={item.id} item={item} />
  ));
}
