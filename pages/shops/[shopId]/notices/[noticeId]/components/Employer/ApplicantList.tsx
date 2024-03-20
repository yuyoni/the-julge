import { h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";

export default function ApplicantList() {
  return (
    <Wrapper>
      <Title>신청자 목록</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 238px;
  gap: 32px;
`;

const Title = styled.span`
  ${h1Regular}
`;
