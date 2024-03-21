import { body1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import ProfileContent from "./ProfileContent";
import Button from "@/components/Button/Button";
import Link from "next/link";

type ProfileCardProps = {
  bio: string;
  name: string;
  phone: string;
  address: string;
};

export default function ProfileCard(props: ProfileCardProps) {
  const { bio, ...rest } = props;
  return (
    <Wrapper>
      <ContentContainer>
        <ProfileContent {...rest} />
        <Biograph>{bio}</Biograph>
      </ContentContainer>
      <ButtonContainer>
        <Link href="/my-profile/edit">
          <Button text="편집하기" color="white" />
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px;
  border-radius: 12px;
  background: var(--The-julge-purple-10, #e9dcf4);

  @media (max-width: 767px) {
    padding: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 767px) {
    gap: 20px;
  }
`;
const ButtonContainer = styled.div`
  width: 169px;

  @media (max-width: 767px) {
    width: 108px;
  }
`;

const Biograph = styled.div`
  ${body1Regular}
`;
