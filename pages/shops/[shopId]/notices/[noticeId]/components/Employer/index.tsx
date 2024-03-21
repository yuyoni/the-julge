import { NoticeList } from "@/lib/types/NoticeTypes";
import PostDetail from "../PostDetail";
import ApplicantList from "./ApplicantList";
import { useUser } from "@/contexts/UserContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RecentNoticeContainer from "../Employee/RecentNoticeContainer";
import updateRecentNotices from "../../utils/updateRecentNotices";

export default function Employer({
  noticeData,
  token,
}: {
  noticeData: NoticeList;
  token: string;
}) {
  const { userInfo } = useUser();
  const { query } = useRouter();
  const { shopId } = query;
  const [isMyNotice, setIsMyNotice] = useState(false);
  const noticeHref = noticeData.links[0].href.slice(18);

  useEffect(() => {
    if (userInfo?.item.shop?.item.id === shopId) {
      setIsMyNotice(true);
    } else {
      updateRecentNotices(noticeHref);
    }
  }, []);

  return (
    <>
      <PostDetail
        token={token}
        isMyNotice={isMyNotice}
        userType="employer"
        noticeData={noticeData}
      />
      {isMyNotice ? <ApplicantList token={token} /> : <RecentNoticeContainer />}
    </>
  );
}