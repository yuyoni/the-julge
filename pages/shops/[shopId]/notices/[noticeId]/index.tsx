import { useNoticeData } from "@/hooks/useNoticeData";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import PostDetail from "./components/PostDetail";
import ApplicantList from "./components/ApplicantList";
import Layout from "@/components/Layout";

export default function PostDetailPage() {
  const { query } = useRouter();
  const { shopId, noticeId } = query;

  const {
    isLoading,
    error,
    data: noticeData,
  } = useNoticeData(`${shopId}`, `${noticeId}`);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Layout>
      {noticeData && (
        <Wrapper>
          <PostDetail noticeData={noticeData} />
          <ApplicantList />
        </Wrapper>
      )}
    </Layout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--The-julge-gray-05, #fafafa);
  padding-bottom: 40px;
`;
