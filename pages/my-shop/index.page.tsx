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
import Layout from "@/components/Layout";
import MetaHead from "@/components/MetaHead";
import ModalContent from "../shops/[shopId]/notices/[noticeId]/components/ModalContent";
import { useRouter } from "next/router";

export default function MyShop() {
  const router = useRouter();
  const { jwt: token, userType } = useCookie();
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

  if (userType === "employee")
    return (
      <ModalContent
        modalIcon="alert"
        modalText="권한이 없습니다"
        handleYesClick={() => {
          router.push("/");
        }}
      />
    );

  return (
    <>
      <MetaHead title="+HE JULGE | 내 가게" />
      <Layout>
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

                    <MyNotices shopImg={shopData.item.imageUrl} />
                  </>
                ) : (
                  <CommonFrame frameType="MY_SHOP" />
                )}
              </>
            )}
          </Header>
        </Container>
      </Layout>
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
