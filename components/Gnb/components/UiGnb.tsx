import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeaderButtons from "./HeaderButtons";
import SearchBar from "./SearchBar";

interface GnbProps {
  userType: string;
  handleClickMovePage: (pathname?: string) => void;
}

export default function UiGnb({ userType, handleClickMovePage }: GnbProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper scrolled={scrolled}>
      <GnbContainer>
        <Logo href="/">
          <Image
            priority
            src="/images/logo.svg"
            alt="더줄게"
            width={112}
            height={40}
          />
        </Logo>
        <SearchBar />
        <HeaderButtons
          userType={userType}
          handleClickMovePage={handleClickMovePage}
        />
      </GnbContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ scrolled: boolean }>`
  position: sticky;
  top: 0;
  background: var(--The-julge-gray-00);
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0px 2px 8px 0px rgba(60, 59, 62, 0.26)" : "none"};
  transition: box-shadow 0.3s ease;
  z-index: 999;
`;

const GnbContainer = styled.div`
  max-width: 968px;
  margin: 0 auto;
  padding: 15px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "logo . search buttons";

  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 1028px) {
    padding: 15px 32px;
  }

  @media only screen and (max-width: 768px) {
    padding: 15px 20px;
    width: 100%;
    grid-template-columns: 1fr 1.2fr;
    grid-row-gap: 16px;
    grid-template-areas:
      "logo buttons"
      "search search";
  }
`;

const Logo = styled.a`
  grid-area: logo;
  width: 112px;
  height: 40px;
  margin-right: 40px;

  @media only screen and (max-width: 1028px) {
    margin-right: 32px;
  }

  @media only screen and (max-width: 768px) {
    width: 84px;
    height: 30px;
    margin-right: auto;
  }
`;
