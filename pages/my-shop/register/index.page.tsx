import Layout from "@/components/Layout";
import MetaHead from "@/components/MetaHead";
import styled from "@emotion/styled";
import MyShopForm from "../components/MyshopForm";

export default function Register() {
  return (
    <>
      <MetaHead title="+HE JULGE | 가게 등록" />
      <Layout>
        <StyledDiv>
          <MyShopForm param="/shops" method="post" />
        </StyledDiv>
      </Layout>
    </>
  );
}

const StyledDiv = styled.div`
  padding: 60px 32px;
`;
