import { body1Regular, h2, h3, h4 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NoPostProps {
  isRecommend: boolean;
  address?: string;
}
const NO_RECOMMEND_MESSAGE = "등록된 공고가 없습니다.";

export default function NoPost({ isRecommend, address }: NoPostProps) {
  const router = useRouter();

  const redirectToProfile = () => {
    router.push("/my-profile");
  };
  const renderRecommendSection = (): ReactNode => {
    return (
      <Container>
        <Title>🙈 현재 준비된 맞춤공고가 없어요. 🙈</Title>
        <SubTitle>🎉맞춤 공고란? </SubTitle>
        설정된 선호 지역 기반 추천하는 공고입니다. <br />
        {address ? (
          <>
            아직 등록된 공고가 없어요. 🙈 <br />
            공고가 등록되는대로 빠르게 안내드리도록 하겠습니다.
          </>
        ) : (
          <>
            프로필 페이지에서 선호지역을 설정하고 가까운 가게의 공고를 추천받아
            보세요!
            <Button
              color="colored"
              text="프로필로 이동"
              handleClick={redirectToProfile}
            />
          </>
        )}
      </Container>
    );
  };

  return (
    <Wrapper>
      {isRecommend ? renderRecommendSection() : NO_RECOMMEND_MESSAGE}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  grid-column: 1 / 4;
  text-align: center;
  width: 100%;
  color: var(--The-julge-black);
  background-color: var(--The-julge-gray-00);
  border-radius: 12px;
  border: 1px dashed var(--The-julge-gray-40);
  ${h3};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  text-align: left;
  ${body1Regular};
`;

const Title = styled.div`
  ${h2}
`;

const SubTitle = styled.div`
  color: var(--The-julge-green-40);
  ${h2};
`;
