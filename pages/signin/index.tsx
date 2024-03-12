import Image from "next/image";
import logo from "@/public/images/logo.svg";
import styled from "@emotion/styled";
import SigninForm from "./components/SigninForm";
import ToSignup from "./components/ToSignup";

export default function Signin() {
  return (
    <CenteredContainer>
      <Wrapper>
        <Image src={logo} alt="logo_button" width={208} height={38} />
        <SigninForm />
        <ToSignup />
      </Wrapper>
    </CenteredContainer>
  );
}

const CenteredContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  font-size: 16px;

  img {
    margin-bottom: 40px;
  }
`;
