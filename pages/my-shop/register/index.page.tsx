import Gnb from "@/components/Gnb";
import styled from "@emotion/styled";
import MyShopForm from "../components/MyshopForm";
import Layout from "@/components/Layout";
import MetaHead from "@/components/MetaHead";

export default function Register() {
  return (
    <>
      <MetaHead title="+HE JULGE | 가게 등록" />
      <Layout>
        <Wrapper>
          <StyledDiv>
            <h1>가게 정보</h1>
            <MyShopForm param="/shops" method="post" />
          </StyledDiv>
        </Wrapper>
      </Layout>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  padding: 60px 32px;
  max-width: 964px;
`;
