import { NoticeBase, ShopItem } from "./NoticeTypes";
import { UserItem } from "./userType";

export interface ApplyResponse {
  item: {
    id: string;
    createAt: string;
    notice: {
      href: string;
      item: NoticeBase;
    };
    shop: {
      href: string;
      item: ShopItem;
    };
    status: string;
    user: {
      href: string;
      item: UserItem;
    };
  };
  links: {
    body: { status: string };
    rel: string;
    description: string;
    href: string;
    method: string;
  }[];
}

export interface ApplicationsResponse {
  count: number;
  hasNext: boolean;
  items: ApplyResponse[];
  shop: Shop;
  status: string;
  links: ApplicantLink[];
}

export interface AppliedNotice {
  createdAt: string;
  id: string;
  notice: {
    href: string;
  };
  closed: boolean;
  description: string;
  hourlyPay: string;
  startsAt: string;
  workhour: string;
}

interface Shop {
  href: string;
  item: ShopItem;
}

export interface ApplicantLink {
  description: string;
  href: string;
  method: string;
  rel: string;
}
