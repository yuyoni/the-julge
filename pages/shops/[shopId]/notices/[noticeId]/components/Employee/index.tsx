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
  const { query } = useRouter();
  const shopId = query.shopId as string;
  const noticeId = query.noticeId as string;

  useEffect(() => {
    if (shopId && noticeId) {
      updateRecentNotices(shopId, noticeId);
    }
  }, [shopId, noticeId]);

  return (
    <>
      <PostDetail userType="employee" noticeData={noticeData} />
      <RecentNoticeContainer />
    </>
  );
}
