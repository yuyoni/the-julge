import fetchData from "@/lib/apis/fetchData";
import { useQuery } from "react-query";

export default function useFetchData<T>(href: string, queryKey: string) {
  return useQuery<T>([queryKey, href], () => fetchData<T>({ param: href }), {
    enabled: !!href,
  });
}
