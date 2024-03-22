import Gnb from "@/components/Gnb";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MyShopForm from "../components/MyshopForm";
import useCookie from "@/hooks/useCookies";
import { useUser } from "@/contexts/UserContext";
import fetchData from "@/lib/apis/fetchData";
import { ShopInfo } from "../type/shop-type";

export default function Edit() {
  const { jwt: token } = useCookie();
  const { userInfo } = useUser();
  const shopId = userInfo?.item?.shop?.item.id;
  const [shopData, setShopData] = useState<ShopInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchShopData() {
      if (shopId) {
        try {
          const data = await fetchData({
            param: `/shops/${shopId}`,
            method: "get",
            token: token,
          });
          setShopData(data as ShopInfo);
          console.log(`${userInfo}`);
        } catch (error) {
          console.error("Failed to fetch shop data:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    }

    fetchShopData();
  }, [userInfo, token]);
  return (
    <>
      <Gnb />
      <StyledDiv>
        <h1>가게 정보</h1>
        <MyShopForm
          param={`/shops/${shopId}`}
          method="put"
          initialData={shopData}
        />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  padding: 60px 32px;
`;
