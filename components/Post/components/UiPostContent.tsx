import styled from "@emotion/styled";
import Image from "next/image";
import {
  body1Bold,
  body1Regular,
  body2Regular,
  caption,
  h2,
  h3,
  h4,
} from "@/styles/fontsStyle";

export interface PostUiPostContentProps {
  name: string;
  duration: string;
  workhour: number;
  address: string;
  hourlyPay: number;
}

export default function UiPostContent({
  name,
  duration,
  workhour,
  address,
  hourlyPay,
}: PostUiPostContentProps) {
  return (
    <PostContent>
      <PostName>{name}</PostName>
      <Time>
        <Image
          priority
          src="/images/clock-icon 1.svg"
          alt="시계아이콘"
          height={20}
          width={20}
        />
        {duration} ({workhour}시간)
      </Time>
      <Location>
        <Image
          priority
          src="/images/location.svg"
          alt="지도아이콘"
          height={20}
          width={20}
        />
        {address}
      </Location>
      <Wage>{Number(hourlyPay).toLocaleString("ko-KR")}원</Wage>
    </PostContent>
  );
}

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 20px;
`;

const Time = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--The-julge-gray-50, #7d7986);
  ${body2Regular}

  @media only screen and (max-width: 768px) {
    ${caption}
  }
`;

const Location = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--The-julge-gray-50, #7d7986);
  ${body2Regular}

  @media only screen and (max-width: 768px) {
    ${caption}
  }
`;

const PostName = styled.div`
  margin-bottom: 8px;
  ${h3}
  @media only screen and (max-width: 768px) {
    ${body1Bold}
  }
`;

const Wage = styled.div`
  margin-top: 8px;
  text-align: right;
  ${h2}
  @media only screen and (max-width: 768px) {
    ${h4}
  }
`;
