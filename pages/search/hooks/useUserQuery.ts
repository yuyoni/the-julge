import { useQuery } from "react-query";
import {
  fetchUser,
  fetchNotices,
  fetchAllNotices,
  getNotices,
} from "./userRequest";
import { SelectedLocationList } from "@/components/Filter/types/types";

interface GetNoticesProp {
  limit: number;
  offset: number;
  sortStr: string;
  keyword?: string;
  startsAtValue: string;
  hourlyPayValue: string;
  address: SelectedLocationList;
}

export const useUserData = (userId: string) => {
  return useQuery("user", () => fetchUser(userId), { enabled: !!userId });
};

export const useNoticesData = (address: string) => {
  return useQuery(["notices", address], () => fetchNotices(address), {
    onSuccess: (data) => {
      if (data?.items?.length === 0) {
        fetchAllNotices();
      }
    },
  });
};

export const useFilteredNoticesData = ({
  limit,
  offset,
  sortStr,
  keyword,
  startsAtValue,
  hourlyPayValue,
  address,
}: GetNoticesProp) => {
  return useQuery(
    [
      "notices",
      limit,
      offset,
      sortStr,
      keyword,
      startsAtValue,
      hourlyPayValue,
      address,
    ],
    () =>
      getNotices({
        limit,
        offset,
        sortStr,
        keyword,
        startsAtValue,
        hourlyPayValue,
        address,
      }),
  );
};
