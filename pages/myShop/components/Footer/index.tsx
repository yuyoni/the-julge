import Image from "next/image";
import styled from "@emotion/styled";
import { body1Regular } from "@/styles/fontsStyle";
import envelopIcon from "@/public/images/envelop-square.svg";
import facebookIcon from "@/public/images/facebook-square.svg";
import instagramIcon from "@/public/images/instagram-square.svg";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <span>©codeit - 2023</span>
        <SpanWrapper>
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </SpanWrapper>
        <ImageWrapper>
          <StyledImage src={envelopIcon} alt="편지봉투 아이콘(?)" />
          <StyledImage src={facebookIcon} alt="페이스북 아이콘" />
          <StyledImage src={instagramIcon} alt="인스타그램 아이콘" />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1440px;
  padding: 37px 238px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: var(--The-julge-gray-10);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  span {
    color: var(--The-julge-gray-50);
    ${body1Regular};
  }
`;

const SpanWrapper = styled.div`
  display: flex;
  width: 181.111px;
  align-items: flex-start;
  gap: 30px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const StyledImage = styled(Image)`
  width: 25px;
  height: auto;
`;
