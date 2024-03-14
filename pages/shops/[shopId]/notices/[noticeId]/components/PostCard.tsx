import { NoticeData } from "@/hooks/useNoticeData";
import styled from "@emotion/styled";
import PostInformation from "./PostInformation";
import Button from "@/components/Button/Button";

export default function PostCard({ noticeData }: { noticeData: NoticeData }) {
  return (
    <Wrapper>
      <ImageContainer>
        <img src={noticeData.item.shop.item.imageUrl} alt="shop_image" />
      </ImageContainer>
      <Container>
        <PostInformation noticeData={noticeData} />
        <Button text="공고 편집하기" color="white" />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  padding: 24px;
  gap: 30px;
  width: 100%;
  grid-template-columns: 1fr 1fr;

  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  background: var(--The-julge-white, #fff);
  gap: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 300px;

  border-radius: 20px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
