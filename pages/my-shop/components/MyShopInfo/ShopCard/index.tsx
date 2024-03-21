import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import locationIcon from "@/public/images/location.svg";
import Button from "@/components/Button/Button";
import { body1Regular, h1Regular } from "@/styles/fontsStyle";

interface ShopCardProps {
  id: string;
  name: string;
  address1: string;
  imageUrl: string;
  description: string;
  category: string;
}

export default function ShopCard({
  id,
  name,
  address1,
  imageUrl,
  description,
  category,
}: ShopCardProps) {
  return (
    <Section>
      <ShopImageWrapper>
        <ShopImage
          src={imageUrl}
          alt="My shop information Card"
          width={539}
          height={320}
          priority
        />
      </ShopImageWrapper>
      <ShopInfoWrapper>
        <DescriptionDiv>
          <MyShopDiv>
            <h3>{category}</h3>
            <h2>{name}</h2>
          </MyShopDiv>
          <LocationDiv>
            <Image
              src={locationIcon}
              alt="Location Icon"
              width={20}
              height={20}
            />
            <span>{address1}</span>
          </LocationDiv>
          <p>{description}</p>
        </DescriptionDiv>
        <ButtonsWrapper>
          <Link href="/my-shop/register">
            <Button text="편집하기" type="submit" color="white" width={170} />
          </Link>
          <Link href={`/shops/${id}/notices`}>
            <Button text="공고 등록하기" type="submit" width={170} />
          </Link>
        </ButtonsWrapper>
      </ShopInfoWrapper>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  width: 964px;
  height: auto;
  padding: 24px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 12px;
  background: var(--The-julge-purple-10);
`;

const ShopImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  width: 539px;
  height: 308px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

const ShopImage = styled(Image)`
  width: 596px;
  height: auto;
  object-fit: cover;
`;

const DescriptionDiv = styled.div`
  display: flex;
  width: 346px;
  gap: 12px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  p {
    ${body1Regular};
  }
`;

const MyShopDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  h3 {
    ${body1Regular};
    color: var(--The-julge-purple-40);
  }

  h2 {
    ${h1Regular};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const ShopInfoWrapper = styled.div`
  display: flex;
  width: 346px;
  padding-top: 16px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--The-julge-gray-50);
  ${body1Regular};
`;
