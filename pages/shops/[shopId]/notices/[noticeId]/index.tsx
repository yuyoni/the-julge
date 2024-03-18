import Layout from "@/components/Layout";
import { useNoticeData } from "@/hooks/useNoticeData";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ApplicantList from "./components/ApplicantList";
import PostDetail from "./components/PostDetail";
import RecentNoticeContainer from "./components/RecentNoticeContainer";
import updateRecentNotices from "./utils/updateRecentNotices";

export default function PostDetailPage() {
  const userType = "employee"; // 임시로 추가
  const { query } = useRouter();
  const { shopId, noticeId } = query;

  const {
    isLoading,
    error,
    data: noticeData,
  } = useNoticeData(`${shopId}`, `${noticeId}`);

  useEffect(() => {
    if (userType === "employee" && shopId && noticeId) {
      updateRecentNotices(shopId as string, noticeId as string);
    }
  }, [userType, shopId, noticeId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  if (!noticeData) return <p>data not found</p>;

  return (
    <Layout>
      <Wrapper>
        <PostDetail noticeData={noticeData} />
        {userType === "employee" ? (
          <RecentNoticeContainer />
        ) : (
          <ApplicantList />
        )}
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--The-julge-gray-05, #fafafa);
  padding-bottom: 40px;
`;
