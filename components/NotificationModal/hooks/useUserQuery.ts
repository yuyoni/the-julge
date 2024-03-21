import { useQuery } from "react-query";
import { ClearNotification } from "./userRequest";

export const useClearNoitification = (
  id: string,
  alertId: string,
  jwt: string,
) => {
  return useQuery("user", () => ClearNotification(id, alertId, jwt));
};
