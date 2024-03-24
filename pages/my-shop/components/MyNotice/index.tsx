import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useUser } from "@/contexts/UserContext";
import useCookie from "@/hooks/useCookies";
import CommonFrame from "../MyShopInfo/Common";
import { h1Regular } from "@/styles/fontsStyle";
import Post from "@/components/Post";
import { ShopData } from "../../type/shop-type";
import formatTimeRange from "@/lib/utils/formatTimeRange";

export interface Notice {
  item: {
    id: string;
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

export default function MyNotices({ shopData }: { shopData: ShopData }) {
  const [isLast, setIsLast] = useState<boolean>(false);
  const { userInfo } = useUser();
  const { jwt: token } = useCookie();
  const shopId = userInfo?.item.shop?.item.id;

  const getnotices = async ({ cursorId = 0 }: { cursorId: number }) => {
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
        <NoticeContainer>
          <StyledH2>내가 등록한 공고</StyledH2>
          <NoticeWrapper>
            <Notices>
              {noticesData.map(({ item }) => (
                <Post
                  item={{
                    shopId: shopData.item.id,
                    id: item.id,
                    name: item.description,
                    duration: formatTimeRange(item.startsAt, item.workhour),
                    address: shopData.item.address1 + shopData.item.address2,
                    hourlyPay: item.hourlyPay,
                    originalHourlyPay: shopData.item.originalHourlyPay,
                    imageUrl: shopData.item.imageUrl,
                    closed: item.closed,
                    startsAt: item.startsAt,
                    workhour: item.workhour,
                  }}
                />
              ))}
            </Notices>
          </NoticeWrapper>
        </NoticeContainer>
      ) : (
        <CommonFrame frameType="NOTICE" shopId={shopId} />
      )}

      <div ref={targetRef} />
    </>
  );
}

const NoticeContainer = styled.div`
  @media (max-width: 768px) {
    padding: 40px 12px;
  }
  @media (max-width: 1028px) {
    width: 100%;
    max-width: none;
    padding: 60px 32px;
  }

  position: relative;
  max-width: 964px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
`;

const StyledH2 = styled.h2`
  ${h1Regular};
  margin-bottom: 24px;
`;

const NoticeWrapper = styled.div`
  @media (max-width: 768px) {
    gap: 16px;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
`;

const Notices = styled.div`
  @media (max-width: 593px) {
    grid-template-columns: repeat(2, 171px);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 171px);
    gap: 16px 8px;
  }
  @media (max-width: 1028px) {
    grid-template-columns: repeat(2, 312px);
    margin: 0 auto;
  }

  display: grid;
  grid-template-columns: repeat(3, 312px);
  margin: 0 auto;
  grid-gap: 31px 14px;
  gap: 31px 14px;
`;
