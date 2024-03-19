import { NoticeList } from "@/lib/types/NoticeTypes";
import { useEffect } from "react";
import updateRecentNotices from "../../utils/updateRecentNotices";
import PostDetail from "../PostDetail";
import RecentNoticeContainer from "./RecentNoticeContainer";
import { useRouter } from "next/router";

interface EmployeeProps {
  noticeData: NoticeList;
}

export default function Employee({ noticeData }: EmployeeProps) {
  const noticeHref = noticeData.links[0].href.slice(19);

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
