import Image from "next/image";
import styled from "@emotion/styled";
import { julgeBodyRegular, julgeH2 } from "@/components/Gnb/styles/fonstStyle";
import { ShopData } from "@/pages/my-shop/type/shop-type";
import { Notice } from "../../MyNotice";
import UiPostContent from "@/components/Post/components/UiPostContent";
import formatTimeRange from "@/lib/utils/formatTimeRange";
interface MyNoticeProps {
  cardData: Notice;
  shopData: ShopData;
}

export default function NoticeCard({ cardData, shopData }: MyNoticeProps) {
  const { hourlyPay, startsAt, workhour, description, closed } = cardData.item;
  const { imageUrl, address1, address2 } = shopData.item;

  return (
    <>
      <CardImage width={200} height={200} src={imageUrl} alt="가게 이미지" />

      <Section>
        <UiPostContent
          name={description}
          duration={formatTimeRange(startsAt, workhour)}
          workhour={workhour}
          address={address1 + address2}
          hourlyPay={hourlyPay}
        />
        <StyledH2>{closed}</StyledH2>
      </Section>
    </>
  );
}

const CardImage = styled(Image)`
  border-radius: 10px;
  display: block;
  width: 280px;
  height: 160px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 147px;
    height: 84px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 16px;

  @media (max-width: 768px) {
    width: 147px;
  }
`;

const StyledH2 = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;
