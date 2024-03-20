import { NoticeList } from "@/lib/types/NoticeTypes";
import PostDetail from "../PostDetail";
import RecentNoticeContainer from "./RecentNoticeContainer";
import { useEffect } from "react";
import updateRecentNotices from "../../utils/updateRecentNotices";

interface EmployeeProps {
  noticeData: NoticeList;
  token: string;
}

export default function Employee({ noticeData, token }: EmployeeProps) {
  const noticeHref = noticeData.links[0].href.slice(18);

  useEffect(() => {
    updateRecentNotices(noticeHref);
  }, [noticeHref]);

  return (
    <>
      <PostDetail token={token} userType="employee" noticeData={noticeData} />
      <RecentNoticeContainer />
    </>
  );
}
