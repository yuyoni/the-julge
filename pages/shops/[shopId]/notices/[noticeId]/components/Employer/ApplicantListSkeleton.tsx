import SkeletonUI from "@/components/Skeleton";
import styled from "@emotion/styled";

export default function ApplicantListSkeleton() {
  return (
    <Wrapper>
      <SkeletonUI width={220} height={42} />
      <SkeletonUI />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 32px;
  gap: 32px;
  max-width: 964px;
  width: 100%;
`;
