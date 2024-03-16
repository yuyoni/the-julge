import styled from "@emotion/styled";
import TableHeader from "./components/Header";
import TableBody from "./components/TableBody";
import Pagination from "../Pagination";

export type History = {
  id: string;
  name: string;
  date: string;
  hourlyPay: string;
  status: string;
};

type TableProps = {
  limit: number;
  count: number;
  histories: History[];
};

export default function Table({ limit, count, histories }: TableProps) {
  return (
    <Wrapper>
      <TableContainer>
        <TableHeader />
        {histories.map((history) => {
          const { id, ...tableData } = history;
          return <TableBody key={id} {...tableData} />;
        })}
      </TableContainer>
      <PaginationContainer>
        <Pagination limit={limit} count={count} />
      </PaginationContainer>
    </Wrapper>
  );
}

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 12px;
`;

const Wrapper = styled.div`
  overflow: hidden;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  border-radius: 10px;
`;
