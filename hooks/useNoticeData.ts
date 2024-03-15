import fetchData from "@/lib/apis/fetchData";
import { useQuery } from "react-query";

interface Shop {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
  body?: {
    hourlyPay: string;
    startsAt: string;
    workhour: string;
    description: string;
  };
  query?: {
    offset: string | undefined | number;
    limit: string | undefined | number;
  };
}

export interface NoticeData {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
    shop: {
      item: Shop;
      href: string;
    };
    currentUserApplication: any;
  };
  links: Link[];
}

export function useNoticeData(shopId: string, noticeId: string) {
  return useQuery<NoticeData>(["noticeData", shopId, noticeId], () =>
    fetchData(`shops/${shopId}/notices/${noticeId}`),
  );
}
