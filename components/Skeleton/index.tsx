import styled from "@emotion/styled";

interface SkeletonUIProps {
  width?: number;
  height?: number;
}

export default function SkeletonUI({ width, height }: SkeletonUIProps) {
  return (
    <Skeleton width={width || "100%"} height={height || "100%"}>
      <rect width="100%" height="100%" fill="#cbc9cf" />
    </Skeleton>
  );
}

const Skeleton = styled.svg`
  border-radius: 8px;

  rect {
    animation: skeletonAnimation 0.8s infinite alternate;

    @keyframes skeletonAnimation {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 0.8;
      }
    }
  }
`;
