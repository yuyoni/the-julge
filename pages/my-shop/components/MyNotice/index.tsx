import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { useRouter } from "next/router";
import { useUser } from "@/contexts/UserContext";
import useCookie from "@/hooks/useCookies";
import useIntersectionObserver from "./useIntersectionObserver";
import Post from "@/components/Post";
import NoticeCard from "../MyShopInfo/NoticeCard";
interface Notice {
  item: {
    id: string;
    name: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function MyNotices() {
  const [isLast, setIsLast] = useState<boolean>(false);
  const router = useRouter();
  const { userInfo } = useUser();
  const { jwt: token } = useCookie();
  const shopId = userInfo?.item.shop?.item.id;

  const getnotices = async ({ cursorId = 0 }: { cursorId: number }) => {
    const shopId = userInfo?.item.shop?.item.id;
    const params = { offset: cursorId, limit: 2 };

    try {
      const response = await axios.get(`${BASE_URL}/shops/${shopId}/notices`, {
        params,
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      setIsLast(response.data.hasNext);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const QUERY_KEYS = {
    notice: "notice",
  } as const;

  const { data, fetchNextPage, isError, isFetching } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.notice],
    queryFn: ({ pageParam }) => getnotices({ cursorId: pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage.offset + 2;
    },
  });

  const noticesData: Notice[] = data?.pages.flatMap((page) => page.items) || [];

  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && isLast) fetchNextPage();
  }, [isVisible]);

  return (
    <>
      {noticesData.map((notice) => (
        <div
          key={notice.item.id}
          onClick={() =>
            router.push(`/shops/${shopId}/notices/${notice.item.id}`)
          }
        >
          <NoticeCard token={notice.item.id} noticeData={notice} isMyNotice />
          <div>{notice.item.description}</div>
        </div>
      ))}

      <div ref={targetRef} />
    </>
  );
}
