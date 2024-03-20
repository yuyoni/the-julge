import Table, { Data } from "@/components/Table";
import useFetchData from "@/hooks/useFetchData";
import { ApplicantLink } from "@/lib/types/Application";
import { h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface ApplicantList {
  count: number;
  hasNext: boolean;
  items: Data[];
  limit: number;
  links: ApplicantLink[];
  offset: number;
}

export default function ApplicantList() {
  const { query } = useRouter();
  const { shopId, noticeId } = query;
  const { data } = useFetchData<ApplicantList>(
    `/shops/${shopId}/notices/${noticeId}/applications`,
    "applicant",
  );
  console.log(data);

  return (
    data && (
      <Wrapper>
        <Title>신청자 목록</Title>
        <Table
          type="employer"
          limit={5}
          count={data.count}
          dataList={data.items}
        />
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 238px;
  gap: 32px;
`;

const Title = styled.span`
  ${h1Regular}
`;
