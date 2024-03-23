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
      <CardWrapper>
        <CardImage width={200} height={200} src={shopImg} alt="가게 이미지" />
        <StyledH2> 설명: {description}</StyledH2>
        <h2>시급 : {hourly} </h2>
        <h2>시간: {startsAt}</h2>
        <h2>근무시간: {workhour}</h2>
        <h2>{closed}</h2>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: var(--The-julge-purple-10);
  width: 400px;
  height: 400px;
  cursor: pointer;
`;

const CardImage = styled(Image)`
  border-radius: 10px;
`;

const StyledH2 = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;
