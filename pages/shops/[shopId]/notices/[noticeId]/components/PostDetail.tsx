import { NoticeList } from "@/lib/types/NoticeTypes";
import { body1Regular, h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import PostCard from "./PostCard";
import NoticeDetailSkeleton from "./Employer/NoticeDetailSkeleton";

interface PostDetailProps {
  token: string;
  noticeData: NoticeList | undefined;
  isMyNotice?: boolean;
  isLoading: boolean;
  error: boolean;
}

export default function PostDetail({
  token,
  noticeData,
  isMyNotice,
  isLoading,
}: PostDetailProps) {
  if (isLoading || !noticeData) return <NoticeDetailSkeleton />;

  return (
    <Container>
      <ShopDetails>
        <Category>{noticeData.item.shop.item.category}</Category>
        <Title>{noticeData.item.shop.item.name}</Title>
      </ShopDetails>
      <PostCard token={token} isMyNotice={isMyNotice} noticeData={noticeData} />
      <PostDescription>
        <DescriptionHeading>공고 설명</DescriptionHeading>
        <DescriptionText>{noticeData.item.description}</DescriptionText>
      </PostDescription>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 32px;
  gap: 24px;
  max-width: 964px;
  width: 100%;
`;

const ShopDetails = styled.div`
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

const DescriptionHeading = styled.span``;

const DescriptionText = styled.p``;
