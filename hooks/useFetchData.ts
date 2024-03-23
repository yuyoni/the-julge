import fetchData from "@/lib/apis/fetchData";
import { useQuery } from "react-query";

interface ParameterType {
  href: string;
  queryKey: string;
  token?: string;
  conditionValue?: boolean;
}

export default function useFetchData<T>({
  href,
  queryKey,
  token,
  conditionValue = true,
}: ParameterType) {
  const fetchFunc = () => {
    return token
      ? fetchData<T>({ param: href, token })
      : fetchData<T>({ param: href });
  };

  return useQuery<T>([queryKey, href], fetchFunc, { enabled: conditionValue });
}
