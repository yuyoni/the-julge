import Gnb from "@/components/Gnb";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MyShopForm from "../components/MyshopForm";
import useCookie from "@/hooks/useCookies";
import { useUser } from "@/contexts/UserContext";
import fetchData from "@/lib/apis/fetchData";
import { ShopInfo } from "../type/shop-type";
import { useQuery } from "react-query";

export default function Edit() {
  const { jwt: token } = useCookie();
  const { userInfo } = useUser();
  const shopId = userInfo?.item?.shop?.item.id;

  const QUERY_KEYS = {
    shop: "shop",
  } as const;

  const getShops = async () => {
    const data: { item: ShopInfo } = await fetchData({
      param: `/shops/${shopId}`,
      method: "get",
      token: token,
    });
    return data.item;
  };

  const { data: shopData, isFetching } = useQuery({
    queryKey: [QUERY_KEYS.shop, userInfo],
    queryFn: () => getShops(),
    enabled: !!userInfo,
  });

  return (
    <>
      {!isFetching && (
        <>
          <Gnb />
          <StyledDiv>
            <MyShopForm
              param={`/shops/${shopId}`}
              method="put"
              initialData={shopData}
            />
          </StyledDiv>
        </>
      )}
    </>
  );
}

const StyledDiv = styled.div`
  padding: 60px 32px;
`;
