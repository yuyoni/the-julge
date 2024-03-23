import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useUser } from "@/contexts/UserContext";
import useCookie from "@/hooks/useCookies";
import useIntersectionObserver from "./useIntersectionObserver";
import CommonFrame from "../MyShopInfo/Common";
import NoticeCard from "../MyShopInfo/NoticeCard";
import { h1Regular } from "@/styles/fontsStyle";

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
interface MyNoticesProps {
  shopImg: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function MyNotices({ shopImg }: MyNoticesProps) {
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
      {noticesData.length > 0 ? (
        <>
          <StyledH2>내가 등록한 공고</StyledH2>
          <NoticeContainer>
            {noticesData.map((notice) => (
              <div
                key={notice.item.id}
                onClick={() =>
                  router.push(`/shops/${shopId}/notices/${notice.item.id}`)
                }
              >
                <NoticeCard
                  hourly={notice.item.hourlyPay}
                  startsAt={notice.item.startsAt}
                  workhour={notice.item.workhour}
                  description={notice.item.description}
                  closed={notice.item.closed}
                  shopImg={shopImg}
                />
              </div>
            ))}
          </NoticeContainer>
        </>
      ) : (
        <CommonFrame frameType="NOTICE" shopId={shopId} />
      )}

      <div ref={targetRef} />
    </>
  );
}

const NoticeContainer = styled.div`
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  display: grid;
  grid-gap: 3rem 1.5rem;
`;

const StyledH2 = styled.h2`
  ${h1Regular};
`;
