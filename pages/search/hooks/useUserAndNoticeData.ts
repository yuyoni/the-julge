import { useEffect, useState } from "react";
import { useNoticesData, useUserData } from "./useQuery";
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
    isLoading,
    isSuccess,
  } = useNoticesData(address, id);

  const notices = noticesData ? noticesData.items : [];
  const noticeArray = notices.map((notice: NoticeList) => notice.item);

  return {
    address,
    noticeArray,
    isLoading,
    isSuccess,
  };
};

export default useUserAndNoticesData;
