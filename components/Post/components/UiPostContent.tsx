import styled from "@emotion/styled";
import { body1Regular, h2, h3 } from "../styles/fontsStyle";

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
        {duration} ({workhour}시간)
      </Time>
      <Location>{address}</Location>
      <Wage>{hourlyPay.toLocaleString("ko-KR")}원</Wage>
    </PostContent>
  );
}

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 10px 0;
  padding: 0 8px;
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
`;
const Wage = styled.div`
  ${h2}
  text-align:right;
`;
