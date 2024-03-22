import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import useIntersectionObserver from "./useIntersectionObserver";
import useCookie from "@/hooks/useCookies";
import { useUser } from "@/contexts/UserContext";
import Post from "@/components/Post";
interface Notice {
  id: string;
  name: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
}

interface Props {
  isLastItem: boolean;
  onFetchMoreNotices: () => void;
  children?: any;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Item: React.FC<Props> = ({
  children,
  isLastItem,
  onFetchMoreNotices,
}) => {
  const ref = useRef<HTMLDivElement | null>(null); // 감시할 엘리먼트
  const entry = useIntersectionObserver(ref, {});
  const isIntersecting = !!entry?.isIntersecting; // 겹치는 영역이 존재하는 지 여부

  useEffect(() => {
    isLastItem && isIntersecting && onFetchMoreNotices(); // 목록의 마지막에 도달했을 때, 리스트를 더 불러오도록 요청한다.
  }, [isLastItem, isIntersecting]);

  return (
    <div ref={ref}>
      <div>{children}</div>
    </div>
  );
};

export default function MyNotices() {
  const [notices, setNotices] = useState<Array<Notice>>([]);
  const [count, setCount] = useState<number>(0);
  const [isLast, setIsLast] = useState<boolean>(false);
  const { userInfo } = useUser();
  const { jwt: token } = useCookie();

  const getnotices = async () => {
    const shopId = userInfo?.item.shop?.item.id;
    const params = { count: 5, offset: 2, limit: 2, sort: "time" }; //offset, limit, count, hasNext

    try {
      const response = await axios.get(`${BASE_URL}/shops/${shopId}/notices`, {
        params,
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      const notices = response.data.items;
      const isLast = !data.hasNext;

      setNotices((prev) => [...prev, ...notices]);
      setIsLast(isLast);

      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    !isLast && getnotices();
  }, [count]);

  return (
    <>
      {notices.map((notice) => (
        <Item
          key={notice.id} //TODO 왜 오류가 나지 왜왜 왜냐고 말해봐 왜야?
          isLastItem={false}
          onFetchMoreNotices={() => setCount((prev) => prev + 1)}
        >
          {notice.name}
        </Item>
      ))}
    </>
  );
}
