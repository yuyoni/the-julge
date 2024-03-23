import Gnb from "@/components/Gnb";
import styled from "@emotion/styled";
import MyShopForm from "../components/MyshopForm";

export default function Register() {
  return (
    <>
      <Gnb />
      <StyledDiv>
        <MyShopForm param="/shops" method="post" />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  padding: 60px 32px;
`;
