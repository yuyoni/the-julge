import { useRouter } from "next/router";
import { useNoticeData } from "@/hooks/useNoticeData";

export default function Index() {
  const { query } = useRouter();
  const { shop_id, notice_id } = query;
  const {
    isLoading,
    error,
    data: noticeData,
  } = useNoticeData(`${shop_id}`, `${notice_id}`);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>{noticeData?.item.hourlyPay}</h2>
      <p>{noticeData?.item.startsAt}</p>
      <p>{noticeData?.item.workhour}</p>
      <p>{noticeData?.item.description}</p>
    </div>
  );
}
