import { useEffect, useState } from "react";
import { ShopData } from "../../type/shop-type";
import CommonFrame from "./Common";
import ShopCard from "./ShopCard";
import fetchData from "@/lib/apis/fetchData";
import useCookie from "@/hooks/useCookies";
import { useUser } from "@/contexts/UserContext";

export default function MyShop() {
  const { userInfo } = useUser();
  const { jwt: token } = useCookie();
  const [shopData, setShopData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (userInfo && userInfo.item && userInfo.item.shop) {
        try {
          const shopId = userInfo.item.shop.item.id;
          const data = await fetchData({
            param: `/shops/${shopId}`,
            method: "get",
            token: token,
          });
          setShopData(data);
        } catch (error) {
          console.error("Failed to fetch shop data:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [userInfo]);

  return (
    <>
      {!isLoading &&
        (shopData ? (
          <ShopCard shop={shopData} /> // 가게 정보가 있으면 카드를 보여줌
        ) : (
          <CommonFrame frameType="MY_SHOP" /> // 가게 정보가 없으면 기본 화면을 보여줌
        ))}
    </>
  );
}

//TODO shopid에 따라서 내 가게 등록하세요 or shopcard 뿌리기
