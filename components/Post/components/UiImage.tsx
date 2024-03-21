import styled from "@emotion/styled";
import WageFlag from "./WageFlag";
import Overlay from "./Overlay";

interface UiImageProps {
  imageUrl: string;
  hourlyPay: number;
  originalHourlyPay: number;
  closed: boolean;
  startAt: string;
}

export default function UiImage({
  imageUrl,
  hourlyPay,
  originalHourlyPay,
  closed,
  startAt,
}: UiImageProps) {
  const isOutdated = new Date(startAt) < new Date();

  return (
    <ImageContent>
      <ImageWrapper>
        <PostImage src={imageUrl} className="card-image" />
        <WageFlag hourlyPay={hourlyPay} originalHourlyPay={originalHourlyPay} />
        {(closed || isOutdated) && (
          <Overlay closed={closed} isOutdated={isOutdated} />
        )}
      </ImageWrapper>
    </ImageContent>
  );
}

const ImageContent = styled.div`
  overflow: hidden;
  flex-shrink: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 200px;
`;

const PostImage = styled.img`
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
