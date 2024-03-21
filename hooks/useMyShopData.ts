import fetchData from "@/lib/apis/fetchData";
import { useQuery } from "react-query";

interface MyNoticeData {
  offset: number;
  limit: number;
  address: string[];
  keyword?: string;
  items: ShopItem;
  links: Link[];
}

export function useMyShopData(shopId: string, hasNotices: boolean) {
  const endpoint = hasNotices ? `shops/${shopId}/notices` : `shop/${shopId}`;
  const params = hasNotices ? { limit: 2, offset: 0 } : undefined;
  return useQuery<MyNoticeData>(["myShopData", shopId, hasNotices], () =>
    fetchData(endpoint),
  );
}
