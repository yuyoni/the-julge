import Layout from "@/components/Layout";
import MetaHead from "@/components/MetaHead";
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
  } = useFetchData<NoticeList>({
    href: `/shops/${shopId}/notices/${noticeId}`,
    queryKey: "NoticeInfo",
    conditionValue: !!noticeId,
  });

  return (
    <>
      <MetaHead
        title={`+HE JULGE | ${noticeData?.item.shop.item.name}의 공고`}
      />
      <Layout>
        <Wrapper>
          <Container>
            {userType === "employee" ? (
              <Employee
                isLoading={isLoading}
                error={error as boolean}
                noticeData={noticeData}
                token={token}
              />
            ) : (
              <Employer
                isLoading={isLoading}
                error={error as boolean}
                noticeData={noticeData}
                token={token}
              />
            )}
          </Container>
        </Wrapper>
      </Layout>
    </>
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
  padding-bottom: 40px;
  gap: 41px;

  @media (max-width: 1023px) {
    padding: 0px 32px;
    gap: 23px;
  }

  @media (max-width: 767px) {
    padding: 12px;
    gap: 15px;
  }
`;
