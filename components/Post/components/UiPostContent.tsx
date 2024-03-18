import styled from "@emotion/styled";
import Image from "next/image";
import { body1Regular, h2 } from "@/styles/fontsStyle";

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
          src="/images/clock-icon 1.svg"
          alt="시계아이콘"
          height={20}
          width={20}
        />
        {duration} ({workhour}시간)
      </Time>
      <Location>
        <Image
          src="/images/location.svg"
          alt="지도아이콘"
          height={20}
          width={20}
        />
        {address}
      </Location>
      <Wage>{hourlyPay.toLocaleString("ko-KR")}원</Wage>
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
  ${body1Regular}
`;

const Location = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--The-julge-gray-50, #7d7986);
  ${body1Regular}
`;

const PostName = styled.div`
  ${h2}
  margin-bottom: 8px;
`;

const Wage = styled.div`
  ${h2}
  margin-top: 8px;
  text-align: right;
`;
