import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import locationIcon from "@/public/images/location.svg";
import Button from "@/components/Button/Button";
import { body1Regular, body2Regular, h1Regular } from "@/styles/fontsStyle";

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
              priority
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
          <div style={{ width: "100%" }}>
            <Link href="/my-shop/edit">
              <Button text="편집하기" type="submit" color="white" />
            </Link>
          </div>
          <div style={{ width: "100%" }}>
            <Link href={`/shops/${id}`}>
              <Button text="공고 등록하기" type="submit" />
            </Link>
          </div>
        </ButtonsWrapper>
      </ShopInfoWrapper>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px;
  border-radius: 12px;
  background: var(--The-julge-green-05);
  gap: 32px;

  @media (max-width: 1028px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0;
  }
`;

const ShopImageWrapper = styled.div`
  @media (max-width: 1028px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1.75 / 1;
  }
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  width: 539px;
  height: 308px;
  border-radius: 12px;
  overflow: hidden;
  border-radius: 15px;
`;

const ShopImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;

  p {
    line-height: 150%;
  }
`;

const MyShopDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--The-julge-green-40);
  ${body1Regular}
  line-height: 20px;

  @media (max-width: 767px) {
    ${body2Regular}
  }

  h2 {
    font-weight: 700;
  }

  h3 {
    color: gray;
    margin-bottom: 10px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  gap: 8px;
`;

const ShopInfoWrapper = styled.div`
  @media (max-width: 1028px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    gap: 40px;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 346px;
  height: 308px;
  padding-top: 16px;

  @media (max-width: 768px) {
    padding-top: 12px;
    gap: 24px;
  }
`;

const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--The-julge-gray-50);
  ${body1Regular};
`;
