import Image from "next/image";
import styled from "@emotion/styled";
import { julgeBodyRegular, julgeH2 } from "@/components/Gnb/styles/fonstStyle";

interface MyNoticeProps {
  hourly: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
  shopImg: string;
}

export default function NoticeCard({
  hourly,
  startsAt,
  workhour,
  description,
  closed,
  shopImg,
}: MyNoticeProps) {
  return (
    <>
      <CardImageWrapper>
        <CardImage width={200} height={200} src={shopImg} alt="가게 이미지" />
      </CardImageWrapper>
      <Section>
        <StyledH2> 설명: {description}</StyledH2>
        <StyledH2>시급 : {hourly} </StyledH2>
        <StyledH2>시간: {startsAt}</StyledH2>
        <StyledH2>근무시간: {workhour}</StyledH2>
        <StyledH2>{closed}</StyledH2>
      </Section>
    </>
  );
}

const CardWrapper = styled.div``;

const CardImageWrapper = styled.div``;

const CardImage = styled(Image)`
  border-radius: 10px;
  display: block;
  width: 280px;
  height: 160px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 147px;
    height: 84px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 16px;

  @media (max-width: 768px) {
    width: 147px;
  }
`;

const StyledH2 = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;
