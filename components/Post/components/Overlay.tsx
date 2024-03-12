import styled from "@emotion/styled";

const OverlayWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
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
  font-size: 24px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  line-height: 35px;
  text-transform: capitalize;
`;

export default function Overlay() {
  return (
    <OverlayWrapper>
      <OverlayDiv>
        <OverlayText>마감 완료</OverlayText>
      </OverlayDiv>
    </OverlayWrapper>
  );
}
