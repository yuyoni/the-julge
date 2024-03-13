import { useNoticeData } from "@/hooks/useNoticeData";
import { useRouter } from "next/router";
import PostInfoCard from "./components/PostInfoCard";
import styled from "@emotion/styled";
import { body1Regular, h1Regular } from "@/styles/fontsStyle";
import EmployeeTable from "./components/EmployeeTable";

export default function Index() {
  const { query } = useRouter();
  const { shopId, noticeId } = query;
  const {
    isLoading,
    error,
    data: noticeData,
  } = useNoticeData(`${shopId}`, `${noticeId}`);

  if (isLoading) return <p>Loading...</p>;

  return (
    noticeData && (
      <Wrapper>
        <Section>
          <PostInfoWrapper>
            <Container>
              <Category>{noticeData.item.shop.item.category}</Category>
              <Title>{noticeData.item.shop.item.name}</Title>
            </Container>
            <PostInfoCard noticeData={noticeData} />
            <PostDescription>
              <span>공고 설명</span>
              <p>{noticeData.item.description}</p>
            </PostDescription>
          </PostInfoWrapper>
        </Section>
        <Section>
          <ApplicantList>
            <Title>신청자 목록</Title>
            <EmployeeTable />
          </ApplicantList>
        </Section>
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--The-julge-gray-05, #fafafa);
`;

const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 238px;
  gap: 24px;
  background: var(--The-julge-gray-05, #fafafa);
`;

const ApplicantList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 238px;
  gap: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Category = styled.span`
  color: var(--The-julge-purple-40, #905cb9);
  ${body1Regular}
`;

const Title = styled.span`
  ${h1Regular}
`;

const PostDescription = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  border-radius: 12px;
  background: var(--The-julge-gray-10, #f2f2f3);
  ${body1Regular}
`;
