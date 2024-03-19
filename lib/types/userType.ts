import { LocationString } from "@/components/Filter/types/types";
import { Link, ShopList } from "./NoticeTypes";

export interface UserInfo {
  id: string;
  email: string;
  type: string;
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
