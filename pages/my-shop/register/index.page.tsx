import DropDown from "@/components/DropDown";
import Gnb from "@/components/Gnb";
import { useUser } from "@/contexts/UserContext";
import styled from "@emotion/styled";
import DropDown from "@/components/DropDown";
import MyShopForm from "../components/MyshopForm";

export default function Register() {
  const { userInfo } = useUser();

  const shopId = userInfo?.item.shop?.item.id;
  const userId = userInfo?.item.id;

  return (
    <>
      <Gnb userType="employer" />
      <StyledDiv>
        <h1>가게 정보</h1>
        <MyShopForm />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  padding: 60px 32px;
`;
