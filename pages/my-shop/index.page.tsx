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
import { h1Regular } from "@/styles/fontsStyle";

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
                    <MyNotices shopData={shopData} />
                  </>
                ) : (
                  <>
                    <CommonFrame frameType="MY_SHOP" />
                    <StyledBox></StyledBox>
                  </>
                )}
              </>
            )}
          </Header>
        </Container>
      </Layout>
    </>
  );
}

const Container = styled.div``;

const Header = styled.div``;

const StyledDiv = styled.div`
  max-width: 964px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 0;
  gap: 41px;

  @media (max-width: 1023px) {
    padding: 60px 32px;
    gap: 23px;
  }

  @media (max-width: 767px) {
    padding: 40px 12px;
    gap: 15px;
  }

  h2 {
    ${h1Regular}
  }
`;

const StyledBox = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: 330px;
    padding: 40px 12px;
  }
  @media (max-width: 1028px) {
    width: 100%;
    max-width: none;
    padding: 60px 32px;
  }

  position: relative;
  max-width: 964px;
  height: 300px;
  margin: 0 auto;
  padding: 60px 0;
  background-color: #fff;
`;
