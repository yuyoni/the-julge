import Layout from "@/components/Layout";
import { useNoticeData } from "@/hooks/useNoticeData";

import useCookie from "@/hooks/useCookies";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Employee from "./components/Employee";
import Employer from "./components/Employer";

export default function PostDetailPage() {
  const { id, userType } = useCookie();
  const {
    query: { shopId, noticeId },
  } = useRouter();

  const {
    isLoading,
    error,
    data: noticeData,
  } = useNoticeData(`shops/${shopId}/notices/${noticeId}`);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Notice Detail fetching error</p>;
  if (!noticeData) return <p>Noticedata not found</p>;

  return (
    <Layout>
      <Wrapper>
        {userType === "employee" ? (
          <Employee noticeData={noticeData} />
        ) : (
          <Employer noticeData={noticeData} />
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
