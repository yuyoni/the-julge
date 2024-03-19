import fetchData from "@/lib/apis/fetchData";
import { NoticeList } from "@/lib/types/NoticeTypes";
import { NoticeHref } from "@/pages/shops/[shopId]/notices/[noticeId]/components/Employee/RecentNoticeContainer";
import { useQuery } from "react-query";

export function useNoticeData(noticeHref: NoticeHref) {
  return useQuery<NoticeList>(
    ["noticeData", noticeHref],
    () => fetchData(noticeHref),
    { enabled: !!noticeHref },
  );
}
