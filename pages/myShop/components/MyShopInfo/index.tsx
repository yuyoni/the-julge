import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { h1, body1Regular } from "@/styles/fontsStyle";
import Button from "@/components/Button/Button";

export default function MyShopInfo() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/myShop/register");
  };

  return (
    <Container>
      <Wrapper>
        <StyledH1>내 가게</StyledH1>
        <Content>
          <h3>내 가게를 소개하고 공고도 등록해 보세요.</h3>
          <ButtonWrapper>
            <Button text="가게 등록하기" handleClick={handleClick} />
          </ButtonWrapper>
        </Content>
      </Wrapper>
    </Container>
  );
}

// 만들어주신 h1에서 font-weight만 바꾸고 싶어서 커스텀 했습니다!
const customH1 = css`
  ${h1};
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  padding: 60px 237px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Wrapper = styled.div`
  width: 965px;
  height: 276px;
  color: var(--The-julge-black);
`;

const StyledH1 = styled.h1`
  margin-bottom: 23px;
  ${customH1};
`;

const Content = styled.div`
  display: flex;
  width: 964px;
  padding: 60px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20);

  h3 {
    align-self: stretch;
    text-align: center;
    ${body1Regular};
  }
`;

const ButtonWrapper = styled.div`
  width: 346px;
`;
