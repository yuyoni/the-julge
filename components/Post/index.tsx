import styled from "@emotion/styled";
import UiImage from "./components/UiImage";
import UiPostContent from "./components/UiPostContent";

export interface PostProps {
  id: string;
  shopId: string;
  name: string;
  duration: string;
  workhour: number;
  address: string;
  hourlyPay: number;
  originalHourlyPay: number;
  imageUrl: string;
  closed: boolean;
}

export default function Post({ item }: { item: PostProps }) {
  const {
    shopId,
    id,
    imageUrl,
    name,
    duration,
    workhour,
    address,
    hourlyPay,
    originalHourlyPay,
    closed,
  } = item;

  return (
    <CardLink href={`/shops/${shopId}/notices/${id}`}>
      <UiImage
        hourlyPay={hourlyPay}
        originalHourlyPay={originalHourlyPay}
        closed={closed}
        imageUrl={imageUrl}
      />
      <UiPostContent
        name={name}
        duration={duration}
        workhour={workhour}
        address={address}
        hourlyPay={hourlyPay}
      />
    </CardLink>
  );
}

const CardLink = styled.a`
  display: flex;
  flex-direction: column;
  color: rgb(51, 51, 51);
  cursor: pointer;
`;
