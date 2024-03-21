import Gnb from "@/components/Gnb";
import MyShopInfo from "./components/MyShopInfo";
import Footer from "@/components/Footer";
import styled from "@emotion/styled";
import ShopCard from "./components/MyShopInfo/ShopCard";
import CommonFrame from "./components/MyShopInfo/Common";
import { useUser } from "@/contexts/UserContext";
import useFetchData from "@/hooks/useFetchData";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyShop() {
  const { userInfo } = useUser();

  const shopId = userInfo?.item.shop?.item.id;
  const userId = userInfo?.item.id;

  return (
    <Container>
      <Header>
        <Gnb userType="employer" />
        <MyShopInfo shopId={shopId || ""} />
      </Header>
      <Footer />
    </Container>
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
