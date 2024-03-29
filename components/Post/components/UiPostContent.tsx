import { body1Regular, body2Regular, h4, Caption } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import Image from "next/image";
import WageFlag from "./WageFlag";

export interface PostUiPostContentProps {
  name: string;
  duration: string;
  workhour: number;
  address: string;
  hourlyPay: number;
  originalHourlyPay: number;
}

export default function UiPostContent({
  name,
  duration,
  workhour,
  address,
  hourlyPay,
  originalHourlyPay,
}: PostUiPostContentProps) {
  return (
    <PostContent>
      <PostName>{name}</PostName>
      <Time>
        <Image
          priority
          src="/images/clock-icon.svg"
          alt="시계아이콘"
          height={20}
          width={20}
        />
        <p>
          {duration} ({workhour}시간)
        </p>
      </Time>
      <Location>
        <Image
          priority
          src="/images/location.svg"
          alt="지도아이콘"
          height={20}
          width={20}
        />
        <p>{address}</p>
      </Location>
      <Wage>{Number(hourlyPay).toLocaleString("ko-KR")}원</Wage>
      <WageContainer>
        <WageFlag hourlyPay={hourlyPay} originalHourlyPay={originalHourlyPay} />
      </WageContainer>
    </PostContent>
  );
}

const PostContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 4px;
`;

const Time = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--The-julge-gray-50, #7d7986);
  ${body2Regular}
  @media only screen and (max-width: 768px) {
    ${Caption}
  }
`;

const Location = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--The-julge-gray-50, #7d7986);
  ${body2Regular}

  @media only screen and (max-width: 768px) {
    ${Caption}
  }
`;

const PostName = styled.div`
  ${body1Regular}
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    ${body1Regular}
  }
`;

const WageContainer = styled.div`
  display: flex;
  justify-content: right;
`;

const Wage = styled.div`
  margin-top: 16px;
  ${body2Regular}
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    ${h4}
  }
`;
