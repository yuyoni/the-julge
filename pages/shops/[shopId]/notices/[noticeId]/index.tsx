import { useNoticeData } from "@/hooks/useNoticeData";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import PostDetail from "./components/PostDetail";
import ApplicantList from "./components/ApplicantList";

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
    noticeData && (
      <Wrapper>
        <PostDetail noticeData={noticeData} />
        <ApplicantList />
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
