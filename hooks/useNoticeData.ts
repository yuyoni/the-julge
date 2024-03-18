import fetchData from "@/lib/apis/fetchData";
import { NoticeList } from "@/lib/types/NoticeTypes";
import { useQuery } from "react-query";

export function useNoticeData(shopId: string, noticeId: string) {
  return useQuery<NoticeList>(["noticeData", shopId, noticeId], () =>
    fetchData(`shops/${shopId}/notices/${noticeId}`),
  );
}
