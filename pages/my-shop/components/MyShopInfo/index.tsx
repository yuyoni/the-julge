import { useEffect, useState } from "react";
import { ShopData } from "../MyshopForm/shop-type";
import CommonFrame from "./Common";
import ShopCard from "./ShopCard";
import fetchData from "@/lib/apis/fetchData";

const getShopInfo = async (shopId: string) => {
  try {
    const response = await fetchData<ShopData>({
      param: `/shops/${shopId}`,
      method: "get",
    });
    console.log("Response:", response);
    return response; // 변경된 부분: response.data를 반환
  } catch (error) {
    throw error; // 오류를 던지도록 수정
  }
};

export default function MyShopInfo({ shopId }: { shopId: string }) {
  const [myShopData, setMyShopData] = useState<ShopData | null>(null);

  useEffect(() => {
    if (shopId) {
      getShopInfo(shopId)
        .then((data) => {
          setMyShopData(data);
        })
        .catch((error) => {
          console.error("Failed to fetch shop info:", error);
          // 오류 처리를 할 수 있습니다.
        });
    }
  }, [shopId]);

  if (myShopData === null) {
    return <CommonFrame frameType="MY_SHOP" />;
  } else {
    return <ShopCard shop={myShopData.item} />;
  }
}
