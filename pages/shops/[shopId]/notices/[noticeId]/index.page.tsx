import Layout from "@/components/Layout";
import useCookie from "@/hooks/useCookies";
import useFetchData from "@/hooks/useFetchData";
import { NoticeList } from "@/lib/types/NoticeTypes";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Employee from "./components/Employee";
import Employer from "./components/Employer";

export default function NoticeDetailPage() {
  const { query } = useRouter();
  const { shopId, noticeId } = query;
  const { jwt: token, userType } = useCookie();

  const {
    isLoading,
    error,
    data: noticeData,
  } = useFetchData<NoticeList>(
    `/shops/${shopId}/notices/${noticeId}`,
    "NoticeInfo",
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Notice Detail fetching error</p>;
  if (!noticeData) return <p>Noticedata not found</p>;

  return (
    <Layout>
      <Wrapper>
        <Container>
          {userType === "employee" ? (
            <Employee noticeData={noticeData} token={token} />
          ) : (
            <Employer noticeData={noticeData} token={token} />
          )}
        </Container>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background: var(--The-julge-gray-05, #fafafa);
`;

const Container = styled.div`
  max-width: 964px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 0;
  gap: 41px;

  @media (max-width: 1023px) {
    padding: 60px 32px;
    gap: 23px;
  }

  @media (max-width: 767px) {
    padding: 40px 12px;
    gap: 15px;
  }
`;
