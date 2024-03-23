import { useUser } from "@/contexts/UserContext";
import { NoticeList } from "@/lib/types/NoticeTypes";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import updateRecentNotices from "../../utils/updateRecentNotices";
import PostDetail from "../PostDetail";
import ApplicantListContainer from "./ApplicantListContainer";
import RecentNoticeContainer from "../Employee/RecentNoticeContainer";

interface EmployerProps {
  isLoading: boolean;
  error: boolean;
  noticeData: NoticeList | undefined;
  token: string;
}

export default function Employer({
  isLoading,
  error,
  noticeData,
  token,
}: EmployerProps) {
  const { userInfo } = useUser();
  const { query } = useRouter();
  const { shopId } = query;
  const [isMyNotice, setIsMyNotice] = useState(false);
  const noticeHref = noticeData?.links[0].href.slice(18);

  useEffect(() => {
    if (userInfo && userInfo.item.shop?.item.id === shopId) {
      setIsMyNotice(true);
    } else {
      if (noticeHref) {
        updateRecentNotices(noticeHref);
      }
    }
  }, [noticeHref]);

  return (
    <Wrapper>
      <PostDetail
        isLoading={isLoading}
        error={error}
        token={token}
        isMyNotice={isMyNotice}
        noticeData={noticeData}
      />
      {isMyNotice ? (
        <ApplicantListContainer token={token} />
      ) : (
        <RecentNoticeContainer />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
