import Layout from "@/components/Layout";
import MetaHead from "@/components/MetaHead";
import styled from "@emotion/styled";
import MyShopForm from "../components/MyshopForm";

export default function Register() {
  return (
    <>
      <Layout>
        <Wrapper>
          <StyledDiv>
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
