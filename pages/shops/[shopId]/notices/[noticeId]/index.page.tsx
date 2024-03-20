import Layout from "@/components/Layout";
import useFetchData from "@/hooks/useFetchData";
import { NoticeList } from "@/lib/types/NoticeTypes";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Employee from "./components/Employee";
import Employer from "./components/Employer";
import { useUser } from "@/contexts/UserContext";

export default function NoticeDetailPage() {
  const { userInfo } = useUser();

  const {
    query: { shopId, noticeId },
  } = useRouter();

  const {
    isLoading,
    error,
    data: noticeData,
  } = useFetchData<NoticeList>(
    `/shops/${shopId}/notices/${noticeId}`,
    "NoticeInfo",
  );

  if (isLoading || !userInfo) return <p>Loading...</p>;
  if (error) return <p>Notice Detail fetching error</p>;
  if (!noticeData) return <p>Noticedata not found</p>;

  return (
    <Layout>
      <Wrapper>
        {userInfo.item.type === "employee" ? (
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
