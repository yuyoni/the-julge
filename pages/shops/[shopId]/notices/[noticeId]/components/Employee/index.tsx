import { NoticeList } from "@/lib/types/NoticeTypes";
import { useEffect } from "react";
import updateRecentNotices from "../../utils/updateRecentNotices";
import PostDetail from "../PostDetail";
import RecentNoticeContainer from "./RecentNoticeContainer";

interface EmployeeProps {
  shopId: string;
  noticeId: string;
  noticeData: NoticeList;
}

export default function Employee({
  shopId,
  noticeId,
  noticeData,
}: EmployeeProps) {
  useEffect(() => {
    if (shopId && noticeId) {
      updateRecentNotices(shopId as string, noticeId as string);
    }
  }, [shopId, noticeId]);
  return (
    <>
      <PostDetail userType="employee" noticeData={noticeData} />
      <RecentNoticeContainer />
    </>
  );
}
