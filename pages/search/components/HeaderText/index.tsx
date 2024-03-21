import { h1, h3 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";

export default function HeaderText({ keyword }: { keyword?: string }) {
  if (keyword) {
    return (
      <Text>
        <Keyword>{keyword}</Keyword>에 대한 공고 목록
      </Text>
    );
  }
  return <Text>전체 공고</Text>;
}

const Text = styled.div`
  grid-area: header-text;
  color: var(--The-julge-black, #111322);
  ${h1};
  @media only screen and (max-width: 768px) {
    ${h3}
  }
`;

const Keyword = styled.span`
  grid-area: header-text;
  color: var(--The-julge-purple-40, #905cb9);
  ${h3};
  @media only screen and (max-width: 768px) {
    ${h3}
  }
`;
