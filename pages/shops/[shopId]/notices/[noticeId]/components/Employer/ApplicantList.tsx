import Table from "@/components/Table";
import type { ApplicantList } from "@/lib/types/Application";
import { h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import transformItems from "../../utils/transformItems";

const LIMIT = 5;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function ApplicantList({ token }: { token: string }) {
  const { query } = useRouter();
  const { shopId, noticeId, page } = query;
  const currentPage = Number(page) >= 1 ? Number(page) : 1;
  const offset = LIMIT * (currentPage - 1);
  const [data, setData] = useState<ApplicantList>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/shops/${shopId}/notices/${noticeId}/applications?offset=${offset}&limit=${LIMIT}`,
          { headers: { Authorization: token } },
        );
        setData(data);
      } catch (error: any) {
        const { message } = error.response.data;
        alert(message);
      }
    };
    fetchData();
  }, [page]);

  if (!data) return <div>Loading...</div>;

  return (
    <Wrapper>
      <Title>신청자 목록</Title>
      {data.count ? (
        <Table
          token={token}
          type="employer"
          limit={5}
          count={data.count}
          dataList={transformItems(data.items)}
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
