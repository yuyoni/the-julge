import styled from "@emotion/styled";

export default function TableHeader() {
  return (
    <Wrapper>
      <Cell width={228}>가게</Cell>
      <Cell width={300}>일자</Cell>
      <Cell width={200}>시급</Cell>
      <Cell>상태</Cell>
    </Wrapper>
  );
}

const Cell = styled.div<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
