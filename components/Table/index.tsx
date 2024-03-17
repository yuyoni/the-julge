import styled from "@emotion/styled";
import TableHeader from "./components/Header";
import OwnerTableBody from "./components/TableBody/OwnerTableBody";
import PartTimerTableBody from "./components/TableBody/PartTimerTableBody";
import Pagination from "../Pagination";

export type Data = {
  [key: string]: string;
};

type TableProps = {
  type: "employer" | "employee";
  limit: number;
  count: number;
  dataList: Data[];
};

const Headers = {
  employer: ["신청자", "소개", "전화번호", "상태"],
  employee: ["가게", "일자", "시급", "상태"],
};

export default function Table({ type, limit, count, dataList }: TableProps) {
  return (
    <Wrapper>
      <TableContainer>
        <TableHeader headers={Headers[type]} />
        {type === "employer"
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

const Wrapper = styled.div`
  overflow-x: auto;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  border-radius: 10px;
`;

const TableContainer = styled.table`
  width: 964px;
  border-collapse: collapse;
  border-spacing: 0;

  td:first-child,
  th:first-child {
    width: 228px;
    position: sticky;
    left: 0;
    z-index: 1;
  }

  td:last-child,
  th:last-child {
    width: auto;
    position: sticky;
    right: 0;
    z-index: 1;
  }
`;

const PaginationContainer = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  padding: 8px 12px;
`;
