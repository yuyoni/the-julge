import Gnb from "@/components/Gnb";
import styled from "@emotion/styled";
import MyShopForm from "../components/MyshopForm";

export default function Register() {
  return (
    <>
      <Gnb />
      <StyledDiv>
        <h1>가게 정보</h1>
        <MyShopForm param="/shops" method="post" />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  padding: 60px 32px;
`;
