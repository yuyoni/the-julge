import Layout from "@/components/Layout";
import { useNoticeData } from "@/hooks/useNoticeData";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Employee from "./components/Employee";
import Employer from "./components/Employer";
import { UserType } from "@/lib/types/userType";

export default function PostDetailPage() {
  const userType: UserType = "employee"; // 임시로 추가
  const { query } = useRouter();
  const { shopId, noticeId } = query;

  const {
    isLoading,
    error,
    data: noticeData,
  } = useNoticeData(`${shopId}`, `${noticeId}`);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  if (!noticeData) return <p>data not found</p>;

  return (
    <Layout>
      <Wrapper>
        {userType === "employee" ? (
          <Employee
            noticeData={noticeData}
            shopId={shopId as string}
            noticeId={noticeId as string}
          />
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
