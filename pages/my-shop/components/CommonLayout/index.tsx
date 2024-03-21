import React from "react";
import styled from "@emotion/styled";
import { h1Regular, body1Regular } from "@/styles/fontsStyle";

interface LayoutProps {
  children: React.ReactNode;
  position: "above" | "below";
}

export default function CommonLayout({ children, position }: LayoutProps) {
  const [title, contents] = React.Children.toArray(children);

  return (
    <>
      <Container position={position}>
        <Header>{title}</Header>
        <Article>{contents}</Article>
      </Container>
    </>
  );
}

const Container = styled.div<{ position: string }>`
  display: flex;
  max-width: 964px;
  width: 100%;
  padding: 60px 237px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: ${({ position }) =>
    position === "below"
      ? "var(--The-julge-gray-05)"
      : "var(--The-julge-white, #fff)"};

  @media (max-width: 767px) {
    display: flex;
    width: 744px;
    padding: 60px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const Header = styled.header`
  h2 {
    ${h1Regular};
  }
`;
const Article = styled.article`
  display: flex;
  width: 965px;
  padding: 60px 24px;
  margin-top: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20);

  p {
    ${body1Regular};
  }
`;
