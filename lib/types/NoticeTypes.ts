export interface NoticeList {
  item: NoticeItem;
  links: Link[];
}

export interface NoticeItem {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: { item: ShopItem };
  currentUserApplication: any;
}

export interface ShopItem {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

export interface Link {
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
