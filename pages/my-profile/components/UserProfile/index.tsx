import { body1Regular, body2Regular, h1Regular, h3 } from "@/styles/fontsStyle";
import Button from "@/components/Button/Button";
import styled from "@emotion/styled";
import Link from "next/link";
import ProfileCard from "../ProfileCard.tsx";

type UserProfileProps = {
  name: string;
  phone: string;
  address: string;
  bio: string;
};

export default function UserProfile(props: UserProfileProps) {
  const { name, phone, address, bio } = props;
  const hasProfile = !!(name || phone || address || bio);
  return (
    <Wrapper hasProfile={hasProfile}>
      <Title>내 프로필</Title>

      {hasProfile ? (
        <ProfileCard {...props} />
      ) : (
        <NoApplication>
          <Description>
            내 프로필을 등록하고 원하는 가게에 지원해 보세요.
          </Description>
          <ButtonContainer>
            <Link href="/">
              <Button text="내 프로필 등록하기" />
            </Link>
          </ButtonContainer>
        </NoApplication>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ hasProfile: boolean }>`
  max-width: 964px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 0;
  gap: 41px;

  @media (max-width: 1023px) {
    padding: 60px 32px;
    gap: 23px;
  }

  @media (max-width: 767px) {
    padding: 40px 12px;
    gap: 15px;
  }
`;

const Title = styled.span`
  ${h1Regular}

  @media (max-width: 767px) {
    ${h3}
  }
`;

const NoApplication = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20);
  padding: 60px 24px;
  gap: 24px;

  @media (max-width: 767px) {
    gap: 16px;
  }
`;

const Description = styled.span`
  ${body1Regular}

  @media (max-width: 767px) {
    ${body2Regular}
    white-space: nowrap;
  }
`;

const ButtonContainer = styled.div`
  width: 346px;
  height: 47px;

  @media (max-width: 767px) {
    width: 150px;
    height: 37px;
  }
`;
