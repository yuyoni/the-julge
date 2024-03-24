import { useRouter } from "next/router";
import { useToast } from "@/contexts/ToastContext";
import { useQuery } from "react-query";
import useCookie from "@/hooks/useCookies";
import axios from "axios";
import formatTimeRange from "@/lib/utils/formatTimeRange";

type Application = {
  id: string;
  name: string;
  date: string;
  hourlyPay: string;
  status: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const LIMIT = 5;

export default function useApplicationHistory() {
  const { showToast } = useToast();
  const router = useRouter();
  const { page } = router.query;
  const currentPage = Number(page) >= 1 ? Number(page) : 1;
  const offset = LIMIT * (currentPage - 1);

  const { jwt, userType: type, id } = useCookie();

  const {
    data = {
      type: type as "employer" | "employee",
      limit: LIMIT,
      count: 0,
      items: [],
    },
    isSuccess,
  } = useQuery("applicationHistory", () => fetchData(), {
    enabled: !!id,
  });

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/users/${id}/applications?limit=${LIMIT}&offset=${offset}`,
        {
          headers: {
            Authorization: jwt,
          },
        },
      );
      const { count, limit, items } = data;
      const history: Application[] = items.map(({ item }: any) => {
        const { id, notice, shop, status } = item;
        const { name } = shop.item;
        const { hourlyPay, startsAt, workhour } = notice.item;
        const date = `${formatTimeRange(startsAt, workhour)} (${workhour}시간)`;
        return {
          id,
          name,
          date,
          hourlyPay,
          status,
        };
      });
      return { type, limit, count, items: history };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { message } = error.response.data;
        showToast(message);
      }
    }
  };

  return { data, isSuccess };
}
