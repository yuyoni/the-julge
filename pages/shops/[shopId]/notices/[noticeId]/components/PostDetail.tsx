import { NoticeList } from "@/lib/types/NoticeTypes";
import { body1Regular, h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import PostCard from "./PostCard";
import { UserType } from "@/lib/types/userType";

interface PostDetailProps {
  userType: UserType;
  noticeData: NoticeList;
}

export default function PostDetail({ userType, noticeData }: PostDetailProps) {
  if (!noticeData) return <div>loading...</div>;

  return (
    <Container>
      <ShopDetails>
        <Category>{noticeData.item.shop.item.category}</Category>
        <Title>{noticeData.item.shop.item.name}</Title>
      </ShopDetails>
      <PostCard userType={userType} noticeData={noticeData} />
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
  padding: 60px 238px;
  gap: 24px;
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
