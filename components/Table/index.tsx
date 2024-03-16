import styled from "@emotion/styled";
import TableRow from "./components/Row";
import TableHeader from "./components/Header";

export default function Table() {
  return (
    <TableContainer>
      <TableHeader />
      <TableRow />
      <Pagenagtion>페이지</Pagenagtion>
    </TableContainer>
  );
}

const Pagenagtion = styled.div`
  width: 100%;
`;

const TableContainer = styled.div`
  width: 100%;
`;
