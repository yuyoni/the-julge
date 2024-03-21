import { h3 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";

export default function NoPost() {
  return <Wrapper>등록된 공고가 없습니다.</Wrapper>;
}

const Wrapper = styled.div`
  grid-column: 1 / 4;
  text-align: center;
  width: 100%;
  color: var(--The-julge-black);
  ${h3};
`;
