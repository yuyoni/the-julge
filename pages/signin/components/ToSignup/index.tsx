import styled from "@emotion/styled";
import Link from "next/link";

export default function ToSignup() {
  return (
    <Wrapper>
      <p>회원이 아니신가요?</p>
      <Link href="/signup">회원가입하기</Link>
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
