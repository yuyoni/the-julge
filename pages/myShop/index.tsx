import Gnb from "@/components/Gnb";
import MyShopInfo from "./components/MyShopInfo";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
export default function MyShop() {
  return (
    <Container>
      <Header>
        <Gnb userType="employer" />
        <MyShopInfo />
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
