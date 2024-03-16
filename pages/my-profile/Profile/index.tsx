import { h1Regular, h3 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";

export default function Profile() {
  return (
    <Wrapper>
      <Title>내 프로필</Title>
    </Wrapper>
  );
}

const Title = styled.span`
  ${h1Regular}

  @media (max-width: 767px) {
    ${h3}
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--The-julge-white);
  font-size: 16px;
  padding: 60px 238px 120px;

  @media (max-width: 1023px) {
    padding: 60px 32px;
  }

  @media (max-width: 767px) {
    padding: 40px 12px;
  }
`;
