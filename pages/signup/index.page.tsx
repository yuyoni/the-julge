import Image from "next/image";
import logo from "@/public/images/logo.svg";
import styled from "@emotion/styled";
import SignupForm from "./components/SignupForm";
import ToSignin from "./components/ToSignin";
import Link from "next/link";
import MetaHead from "@/components/MetaHead";

export default function Signup() {
  return (
    <>
      <MetaHead title="+HE JULGE | 회원 가입" />
      <CenteredContainer>
        <Wrapper>
          <Link href="/">
            <Image
              priority
              src={logo}
              alt="logo_button"
              width={248}
              height={45}
            />
          </Link>
          <SignupForm />
          <ToSignin />
        </Wrapper>
      </CenteredContainer>
    </>
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
