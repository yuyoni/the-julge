import Table from "@/components/Table";
import { ApplicantList } from "@/lib/types/Application";
import { h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import transformItems from "../../utils/transformItems";
import handleAxiosError from "@/lib/apis/handleAxiosError";

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
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [page]);

  return (
    data && (
      <>
        <Wrapper>
          <Title>신청자 목록</Title>
          <Table
            token={token}
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
