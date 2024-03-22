import { body1Regular, h2, h3, h4 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import useCookie from "@/hooks/useCookies";

interface NoPostProps {
  isRecommend: boolean;
}

export default function NoPost({ isRecommend }: NoPostProps) {
  const router = useRouter();
  const moveProfile = () => {
    router.push("/my-profile");
  };

  if (isRecommend) {
    return (
      <Wrapper>
        <Container>
          <Title>🙈 현재 준비된 맞춤공고가 없어요. 🙈</Title>
          <SubTitle>🎉맞춤 공고란? </SubTitle>
          설정된 선호 지역 기반 추천하는 공고입니다. <br />
          프로필 페이지에서 선호지역을 설정하고 가까운 가게의 공고를 추천받아
          보세요!
          <Button
            color="colored"
            text="프로필로 이동"
            handleClick={moveProfile}
          />
        </Container>
      </Wrapper>
    );
  } else {
    return <Wrapper>등록된 공고가 없습니다</Wrapper>;
  }
}

const Wrapper = styled.div`
  grid-column: 1 / 4;
  text-align: center;
  width: 100%;
  color: var(--The-julge-black);
  ${h3};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  text-align: left;
  border-radius: 4px;
  border: 1px solid;
  ${body1Regular};
`;

const Title = styled.div`
  ${h2}
`;

const SubTitle = styled.div`
  color: var(--The-julge-purple-40);
  ${h2};
`;
