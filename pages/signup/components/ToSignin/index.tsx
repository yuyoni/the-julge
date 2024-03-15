import styled from "@emotion/styled";
import Link from "next/link";

export default function ToSignin() {
  return (
    <Wrapper>
      <p>이미 가입 하셨나요?</p>
      <Link href="/signin">로그인하기</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 5px;

  a {
    color: var(--The-julge-purple-40);
    text-decoration: underline;
  }
`;
