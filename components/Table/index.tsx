import styled from "@emotion/styled";
import TableHeader from "./components/Header";
import OwnerTableRow from "./components/TableRow/OwnerTableRow";
import PartTimerTableRow from "./components/TableRow/PartTimerTableRow";
import Pagination from "../Pagination";

export type Data = {
  [key: string]: string;
};

type TableProps = {
  type: "employer" | "employee";
  limit: number;
  count: number;
  dataList: Data[];
  handlePermitClick?: () => void;
  handleDenyClick?: () => void;
};

const Headers = {
  employer: ["신청자", "소개", "전화번호", "상태"],
  employee: ["가게", "일자", "시급", "상태"],
};

export default function Table({
  type,
  limit,
  count,
  dataList,
  handlePermitClick,
  handleDenyClick,
}: TableProps) {
  return (
    <Wrapper>
      <TableContainer>
        <TableHeader headers={Headers[type]} />
        <tbody>
          {dataList.map((data) => {
            const { id, ...tableData } = data;
            return type === "employer" ? (
              <OwnerTableRow
                key={id}
                {...(tableData as Data)}
                handlePermitClick={handlePermitClick}
                handleDenyClick={handleDenyClick}
              />
            ) : (
              <PartTimerTableRow key={id} {...tableData} />
            );
          })}
        </tbody>
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

  ::-webkit-scrollbar {
    display: none; /* 웹킷 브라우저의 스크롤바를 숨김 */
  }
`;

const TableContainer = styled.table`
  width: 964px;
  border-collapse: collapse;
  border-spacing: 0;

  th:first-of-type,
  td:first-of-type {
    width: 228px;
    position: sticky;
    left: 0;
    z-index: 1;
  }

  th:last-of-type,
  td:last-of-type {
    width: auto;
    position: sticky;
    right: 0;
    z-index: 1;
  }

  td:nth-of-type(2) {
    width: 300px;
  }

  td:nth-of-type(3) {
    width: 200px;
  }
`;

const PaginationContainer = styled.div`
  position: sticky;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 8px 12px;
`;
