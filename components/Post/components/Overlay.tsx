import styled from "@emotion/styled";
import { h1 } from "@/styles/fontsStyle";

interface OverlayProps {
  closed: boolean;
  isOutdated: boolean;
}

export default function Overlay({ closed, isOutdated }: OverlayProps) {
  return (
    <OverlayWrapper>
      <OverlayDiv>
        {isOutdated ? (
          <OverlayText>지난 공고</OverlayText>
        ) : closed ? (
          <OverlayText>마감 완료</OverlayText>
        ) : null}
      </OverlayDiv>
    </OverlayWrapper>
  );
}

const OverlayWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--The-julge-overlay-box);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverlayDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OverlayText = styled.div`
  color: var(--The-julge-gray-00);
  text-transform: capitalize;
  ${h1}
`;
