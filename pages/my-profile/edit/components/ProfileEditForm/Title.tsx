import { ReactNode } from "react";
import { h1Regular, h3 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

type TitleProps = {
  children: ReactNode;
};

export default function Title({ children }: TitleProps) {
  return (
    <Wrapper>
      {children}
      <Link href="/my-profile">
        <Image
          priority
          src="/images/close_icon.svg"
          alt="닫기 버튼"
          width={32}
          height={32}
        />
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${h1Regular}

  @media (max-width: 767px) {
    ${h3}
  }
`;
