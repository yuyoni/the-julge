import { useState, useEffect } from "react";
import { useFilteredNoticesData } from "@/pages/search/hooks/useUserQuery";
import type { SelectedLocationList } from "@/components/Filter/types/types.js";
import { NoticeList } from "@/lib/types/NoticeTypes";

interface AllNoticeProps {
  keyword: string;
  initialPage: number;
}

export default function useAllNotices({
  keyword,
  initialPage,
}: AllNoticeProps) {
  const [page, setPage] = useState(initialPage);
  const [address, setAddress] = useState<SelectedLocationList>([]);
  const [startsAtValue, setStartsAtValue] = useState("");
  const [hourlyPayValue, setHourlyPayValue] = useState("");
  const [sortStr, setSortStr] = useState("시급많은순");

  const limit = 6;
  const offset = (page - 1) * limit;

  useEffect(() => {
    setPage(initialPage);
  }, [initialPage]);

  const handleCategoryChange = (category: string) => setSortStr(category);

  const handleApplyFilter = (
    locations: SelectedLocationList,
    startsAt: string,
    hourlyPay: string,
  ) => {
    setAddress(locations);
    setStartsAtValue(startsAt);
    setHourlyPayValue(hourlyPay);
  };

  const { data: noticesData, isSuccess } = useFilteredNoticesData({
    limit,
    offset,
    sortStr,
    startsAtValue,
    hourlyPayValue,
    address,
    keyword,
  });

  const notices = noticesData?.items ?? [];
  const noticeArray = notices.map((notice: NoticeList) => notice.item);
  const count = noticesData?.count;

  return {
    count,
    limit,
    page,
    sortStr,
    isSuccess,
    noticeArray,
    handleCategoryChange,
    handleApplyFilter,
  };
}
