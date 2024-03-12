import styled from "@emotion/styled";
import WageFlag from "./WageFlag";
import Overlay from "./Overlay";

const ImageContent = styled.div`
  height: 294px;
  overflow: hidden;
  border-radius: 4px;
  flex-shrink: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

const PostImage = styled.img`
  overflow: hidden;
  width: 100%;
  position: absolute;
`;

interface UiImageProps {
  imageUrl: string;
  hourlyPay: number;
  originalHourlyPay: number;
  closed: boolean;
}

export default function UiImage({
  imageUrl,
  hourlyPay,
  originalHourlyPay,
  closed,
}: UiImageProps) {
  return (
    <ImageContent>
      <ImageWrapper>
        <PostImage src={imageUrl} />
        <WageFlag hourlyPay={hourlyPay} originalHourlyPay={originalHourlyPay} />
        {closed && <Overlay />}
      </ImageWrapper>
    </ImageContent>
  );
}
