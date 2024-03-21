import styled from "@emotion/styled";
import { h1 } from "@/styles/fontsStyle";

interface OverlayProps {
  overlayText: string;
}

export default function Overlay({ overlayText }: OverlayProps) {
  return (
    <OverlayWrapper>
      <OverlayDiv>
        <OverlayText>{overlayText}</OverlayText>
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
