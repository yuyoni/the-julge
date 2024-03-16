import styled from "@emotion/styled";
import TableHeader from "./components/Header";
import TableBody from "./components/TableBody";

export type History = {
  id: string;
  name: string;
  date: string;
  hourlyPay: string;
  status: string;
};

type TableProps = {
  histories: History[];
};

export default function Table({ histories }: TableProps) {
  return (
    <Wrapper>
      <TableContainer>
        <TableHeader />
        {histories.map((history) => {
          const { id, ...tableData } = history;
          return <TableBody key={id} {...tableData} />;
        })}
      </TableContainer>
      <Pagination>페이지</Pagination>
    </Wrapper>
  );
}

const Pagination = styled.div``;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const Wrapper = styled.div`
  overflow: hidden;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  border-radius: 10px;
`;
