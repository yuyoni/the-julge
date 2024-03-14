import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import { body1Regular } from "@/styles/fontsStyle";

export default function Footer() {
  return (
    <FooterWrapper>
      <Items>
        <Copyright>&copy;codeit - 2024</Copyright>
        <Links>
          <Link href="/#">Privacy Policy</Link>
          <Link href="/#">FAQ</Link>
        </Links>
        <Sns>
          <Link href="/#" rel="noopener noreferrer">
            <Image
              src="/images/envelop-square.svg"
              alt="이메일 로고 "
              height={25}
              width={25}
            />
          </Link>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/facebook-square.svg"
              alt="facebook 홈페이지로 연결된 facebook 로고"
              height={25}
              width={25}
            />
          </Link>

          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/instagram-square.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
              height={25}
              width={25}
            />
          </Link>
        </Sns>
      </Items>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 160px;
  margin-top: 40px;
  background-color: var(--The-julge-gray-10);
  color: var(--The-julge-gray-50);

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

const Items = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template: 'copyright footer-links sns';
  width: 100%;
  padding: 32px;
  
  ${body1Regular}

  @media (max-width: 768px) {
    grid-template:
      'footer-links sns'
      '. .' 1fr
      'copyright .';

    height: 100px;
    max-width: 1920px;
    padding: 32px 104px 0;
  }
}
`;

const Copyright = styled.span`
  grid-area: copyright;
  color: var(--The-julge-gray-50, #7d7986);
`;

const Links = styled.div`
  grid-area: footer-links;
  display: flex;
  column-gap: 30px;
  padding-right: 18px;
  color: var(--The-julge-gray-50, #7d7986);
`;

const Sns = styled.div`
  grid-area: sns;
  display: flex;
  column-gap: 12px;
`;
