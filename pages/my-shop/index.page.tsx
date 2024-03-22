import Gnb from "@/components/Gnb";
import Footer from "@/components/Footer";
import styled from "@emotion/styled";
import { useUser } from "@/contexts/UserContext";
import CommonFrame from "./components/MyShopInfo/Common";
import ShopCard from "./components/MyShopInfo/ShopCard";
import useCookie from "@/hooks/useCookies";
import { useState, useEffect } from "react";
import fetchData from "@/lib/apis/fetchData";
import { ShopData } from "./type/shop-type";
import MyNotices from "./components/MyNotice";

export default function MyShop() {
  const { jwt: token } = useCookie();
  const { userInfo } = useUser();
  const [shopData, setShopData] = useState<ShopData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchShopData() {
      if (userInfo && userInfo.item && userInfo.item.shop) {
        const shopId = userInfo.item.shop.item.id;
        try {
          const data = await fetchData({
            param: `/shops/${shopId}`,
            method: "get",
            token: token,
          });
          setShopData(data as ShopData);
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
  //TODO 공고 있을 때 ShopCard 밑에 컴포넌트로 빼기
  return (
    <>
      <Gnb />
      <Container>
        <Header>
          {!isLoading && (
            <>
              {shopData ? (
                <>
                  <StyledDiv>
                    <h2>내 가게</h2>
                    <ShopCard
                      id={shopData.item.id as string}
                      name={shopData.item.name}
                      address1={shopData.item.address1}
                      imageUrl={shopData.item.imageUrl}
                      description={shopData.item.description}
                      category={shopData.item.category}
                    />
                  </StyledDiv>
                  <CommonFrame frameType="NOTICE" shopId={shopData.item.id} />
                  <MyNotices />
                </>
              ) : (
                <CommonFrame frameType="MY_SHOP" />
              )}
            </>
          )}
        </Header>
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 458px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledDiv = styled.div`
  display: flex;
  padding: 60px 237px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
