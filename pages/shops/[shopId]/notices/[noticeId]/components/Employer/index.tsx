import { useUser } from "@/contexts/UserContext";
import { NoticeList } from "@/lib/types/NoticeTypes";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import updateRecentNotices from "../../utils/updateRecentNotices";
import RecentNoticeContainer from "../Employee/RecentNoticeContainer";
import PostDetail from "../PostDetail";
import ApplicantList from "./ApplicantList";

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
    <Wrapper>
      <PostDetail
        token={token}
        isMyNotice={isMyNotice}
        userType="employer"
        noticeData={noticeData}
      />
      {isMyNotice ? <ApplicantList token={token} /> : <RecentNoticeContainer />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
