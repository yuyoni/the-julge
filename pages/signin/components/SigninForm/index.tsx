import Button from "@/components/Button/Button";
import styled from "@emotion/styled";

export default function SigninForm() {
  return (
    <Container>
      <div>
        <label>이메일</label>
        <input placeholder="입력" />
      </div>
      <div>
        <label>비밀번호</label>
        <input placeholder="입력" />
      </div>
      <Button text="로그인 하기" />
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    font-size: 16px;
  }
`;
