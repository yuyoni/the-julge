import SkeletonUI from "@/components/Skeleton";
import styled from "@emotion/styled";

export default function NoticeDetailSkeleton() {
  return (
    <Wrapper>
      <Container>
        <SkeletonUI width={50} height={20} />
        <SkeletonUI width={140} height={36} />
      </Container>
      <SkeletonUI height={356} />
      <SkeletonUI height={148} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 32px;
  gap: 24px;
  max-width: 964px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`;
