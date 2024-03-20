import { LocationString } from "@/components/Filter/types/types";
import { Link, ShopList } from "./NoticeTypes";

export interface UserItem {
  id: string;
  email: string;
  type: string;
}

export interface UserInfo extends UserItem {
  shop: null | ShopList;
  name?: string;
  phone?: string;
  address?: LocationString;
  bio?: string;
}

export interface UserInfoBody {
  name: string;
  phone: string;
  address: LocationString;
  bio: string;
}

export interface UserData {
  item: UserInfo;
  links: Link<UserInfoBody>[];
}
