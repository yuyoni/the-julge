import { Data } from "../..";
import OwnerTableRow from "./OwnerTableRow";
import PartTimerTableRow from "./PartTimerTableRow";

type TableBodyProps = {
  type: "employer" | "employee";
  token?: string;
  dataList: Data[];
  handlePermitClick?: () => void;
  handleDenyClick?: () => void;
};

export default function TableBody({
  type,
  token,
  dataList,
  handlePermitClick,
  handleDenyClick,
}: TableBodyProps) {
  return (
    <tbody>
      {dataList.map((data, index) => {
        const { id, applicationId, ...tableData } = data;
        return type === "employer" ? (
          <OwnerTableRow
            key={id + index}
            token={token}
            applicationId={applicationId}
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
