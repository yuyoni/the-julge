import { NoticeList } from "@/lib/types/NoticeTypes";
import PostDetail from "../PostDetail";
import RecentNoticeContainer from "./RecentNoticeContainer";
import { useEffect } from "react";
import updateRecentNotices from "../../utils/updateRecentNotices";

interface EmployeeProps {
  noticeData: NoticeList | undefined;
  token: string;
  isLoading: boolean;
  error: boolean;
}

export default function Employee({
  isLoading,
  error,
  noticeData,
  token,
}: EmployeeProps) {
  const noticeHref = noticeData?.links[0].href.slice(18);

  useEffect(() => {
    if (noticeHref) updateRecentNotices(noticeHref);
  }, [noticeHref]);

  return (
    <>
      <PostDetail
        isLoading={isLoading}
        error={error}
        token={token}
        noticeData={noticeData}
      />
      <RecentNoticeContainer />
    </>
  );
}
