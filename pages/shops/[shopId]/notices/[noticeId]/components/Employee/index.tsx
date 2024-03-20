import { NoticeList } from "@/lib/types/NoticeTypes";
import PostDetail from "../PostDetail";
import RecentNoticeContainer from "./RecentNoticeContainer";
import { useEffect } from "react";
import updateRecentNotices from "../../utils/updateRecentNotices";

interface EmployeeProps {
  noticeData: NoticeList;
}

export default function Employee({ noticeData }: EmployeeProps) {
  const noticeHref = noticeData.links[0].href.slice(18);

  useEffect(() => {
    updateRecentNotices(noticeHref);
  }, [noticeHref]);

  return (
    <>
      <PostDetail userType="employee" noticeData={noticeData} />
      <RecentNoticeContainer />
    </>
  );
}
