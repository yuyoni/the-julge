import { Data } from "../..";
import OwnerTableRow from "./OwnerTableRow";
import PartTimerTableRow from "./PartTimerTableRow";

type TableBodyProps = {
  type: "employer" | "employee";
  dataList: Data[];
  handlePermitClick?: () => void;
  handleDenyClick?: () => void;
};

export default function TableBody({
  type,
  dataList,
  handlePermitClick,
  handleDenyClick,
}: TableBodyProps) {
  return (
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
  );
}
