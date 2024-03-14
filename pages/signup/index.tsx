import Image from "next/image";
import logo from "@/public/images/logo.svg";
import styled from "@emotion/styled";
import SignupForm from "./components/SignupForm";
import ToSignin from "./components/ToSignin";

export default function Signup() {
  return (
    <CenteredContainer>
      <Wrapper>
        <Image src={logo} alt="logo_button" width={248} height={45} />
        <SignupForm />
        <ToSignin />
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
