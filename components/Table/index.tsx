import styled from "@emotion/styled";
import TableHeader from "./components/Header";
import OwnerTableBody from "./components/TableBody/OwnerTableBody";
import PartTimerTableBody from "./components/TableBody/PartTimerTableBody";
import Pagination from "../Pagination";

export type Data = {
  [key: string]: string;
};

type TableProps = {
  type: "Owner" | "PartTimer";
  limit: number;
  count: number;
  dataList: Data[];
};

const Headers = {
  Owner: ["신청자", "소개", "전화번호", "상태"],
  PartTimer: ["가게", "일자", "시급", "상태"],
};

export default function Table({ type, limit, count, dataList }: TableProps) {
  return (
    <Wrapper>
      <TableContainer>
        <TableHeader headers={Headers[type]} />
        {type === "Owner"
          ? dataList.map((data) => {
              const { id, ...tableData } = data;
              return <OwnerTableBody key={id} {...tableData} />;
            })
          : dataList.map((data) => {
              const { id, ...tableData } = data;
              return <PartTimerTableBody key={id} {...tableData} />;
            })}
      </TableContainer>
      <PaginationContainer>
        <Pagination limit={limit} count={count} />
      </PaginationContainer>
    </Wrapper>
  );
}

const TableContainer = styled.table`
  overflow-x: auto;
  border-collapse: collapse;
  border-spacing: 0;

  td,
  th {
    width: 200px;
  }
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
