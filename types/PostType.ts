export interface PostTypes {
  item: {
    noticeId: string;
    shopId: string;
    name: string;
    duration: string;
    workhour: number;
    address: string;
    hourlyPay: number;
    originalHourlyPay: number;
    imageUrl: string;
    closed: boolean;
  };
}

export interface NoticesItem {
  item: NoticeItem;
}

export interface NoticeItem {
  id: string;
  href: string;
  shop: ShopItem;
  description: string;
  hourlyPay: number;
  closed: boolean;
  startsAt: string;
  workhour: number;
}

export interface ShopItem {
  item: {
    id: string;
    href: string;
    address1: string;
    address2: string;
    category: string;
    description: string;
    imageUrl: string;
    name: string;
    originalHourlyPay: number;
  };
}
