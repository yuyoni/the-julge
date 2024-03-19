import { FormDataType } from "./FormDataType";

export interface NoticeList {
  item: NoticeItem;
  links: Link<FormDataType>[];
}

export interface ShopList {
  item: ShopItem;
  href: string;
}

export interface NoticeItem {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shop: ShopList;
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

export interface Link<T> {
  rel: string;
  description: string;
  method: string;
  href: string;
  body?: T;
  query?: {
    offset: string | undefined | number;
    limit: string | undefined | number;
  };
}
