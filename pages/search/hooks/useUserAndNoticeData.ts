import { useEffect, useState } from "react";
import { useNoticesData, useUserData } from "./useUserQuery";
import { NoticeList } from "@/lib/types/NoticeTypes";

const useUserAndNoticesData = (id: string) => {
  const { data: userData } = useUserData(id);
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (userData?.item?.address) {
      setAddress(userData.item.address);
    }
  }, [userData]);

  const {
    data: noticesData,
    isLoading: isNoticesLoading,
    error: noticesError,
  } = useNoticesData(address);

  const notices = noticesData?.items ?? [];
  const noticeArray = notices.map((notice: NoticeList) => notice.item);

  return {
    address,
    noticeArray,
    isLoading: isNoticesLoading,
    error: noticesError,
  };
};

export default useUserAndNoticesData;
