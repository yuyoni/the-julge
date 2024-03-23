import Table from "@/components/Table";
import useFetchData from "@/hooks/useFetchData";
import { ApplicantList } from "@/lib/types/Application";
import { h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import transformItems from "../../utils/transformItems";
import ApplicantListSkeleton from "./ApplicantListSkeleton";

const LIMIT = 5;

export default function ApplicantListContainer({ token }: { token: string }) {
  const { query } = useRouter();
  const { shopId, noticeId, page } = query;
  const currentPage = Number(page) >= 1 ? Number(page) : 1;
  const offset = LIMIT * (currentPage - 1);

  const {
    data: ApplicantList,
    isLoading,
    error,
  } = useFetchData<ApplicantList>({
    href: `/shops/${shopId}/notices/${noticeId}/applications?offset=${offset}&limit=${LIMIT}`,
    queryKey: "applicationList",
    token,
    conditionValue: !!noticeId,
  });

  if (isLoading || !ApplicantList) return <ApplicantListSkeleton />;

  return (
    <Wrapper>
      <Title>신청자 목록</Title>
      {ApplicantList.count ? (
        <Table
          token={token}
          type="employer"
          limit={5}
          count={ApplicantList.count}
          dataList={transformItems(ApplicantList.items)}
        />
      ) : (
        <NoApplicant>아직 신청 내역이 없어요</NoApplicant>
      )}
    </Wrapper>
  );
}

const NoApplicant = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 24px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 32px;
  max-width: 964px;
  width: 100%;
  gap: 32px;
`;

const Title = styled.span`
  ${h1Regular}
`;
