import Table from "@/components/Table";
import useFetchData from "@/hooks/useFetchData";
import { ApplicantList } from "@/lib/types/Application";
import { h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import transformItems from "../../utils/transformItems";

export default function ApplicantList() {
  const { query } = useRouter();
  const { shopId, noticeId } = query;
  const { data } = useFetchData<ApplicantList>(
    `/shops/${shopId}/notices/${noticeId}/applications`,
    "applicant",
  );

  return (
    data && (
      <>
        <Wrapper>
          <Title>신청자 목록</Title>
          <Table
            type="employer"
            limit={5}
            count={data.count}
            dataList={transformItems(data.items)}
          />
        </Wrapper>
      </>
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
