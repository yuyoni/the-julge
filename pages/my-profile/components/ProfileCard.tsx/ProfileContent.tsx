import { body1Regular, body2Regular, h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import Image from "next/image";
import formatPhoneNumber from "../../utils/formatPhoneNumber";

type ProfileContentProps = {
  name: string;
  phone: string;
  address: string;
};

export default function ProfileContent({
  name,
  phone,
  address,
}: ProfileContentProps) {
  const formattedPhone = formatPhoneNumber(phone);
  return (
    <Wrapper>
      <NameContainer>
        이름
        <Name>{name}</Name>
      </NameContainer>
      <PhoneContainer>
        <Image src="/images/phone.svg" alt="전화번호" width={20} height={20} />

        {formattedPhone}
      </PhoneContainer>
      <AddressContainer>
        <Image
          src="/images/location.svg"
          alt="선호지역"
          width={20}
          height={20}
        />
        <div>선호지역:</div>
        {address}
      </AddressContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 767px) {
    gap: 8px;
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--The-julge-purple-40);
  ${body1Regular}
  line-height: 20px;

  @media (max-width: 767px) {
    ${body2Regular}
  }
`;

const Name = styled.div`
  color: var(--The-julge-black);
  ${h1Regular}
`;

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--The-julge-gray-50);
  ${body1Regular}

  @media (max-width: 767px) {
    ${body2Regular}
  }
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--The-julge-gray-50);
  ${body1Regular}

  @media (max-width: 767px) {
    ${body2Regular}
  }
`;
