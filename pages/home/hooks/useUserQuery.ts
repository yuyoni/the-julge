import { useQuery } from "react-query";
import { fetchUser, fetchNotices, fetchAllNotices } from "./userRequest";

export const useUserData = (userId: string) => {
  return useQuery("user", () => fetchUser(userId));
};

export const useNoticesData = (address: string) => {
  return useQuery(["notices", address], () => fetchNotices(address), {
    enabled: !!address, // address가 truthy 값일 때만 쿼리 실행
    onSuccess: (data) => {
      if (data?.items?.length === 0) {
        fetchAllNotices();
      }
    },
  });
};
