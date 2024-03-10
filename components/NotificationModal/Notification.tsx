import notificationCircle from "@/public/notification_circle.svg";
import styled from "@emotion/styled";
import Image from "next/image";
import { Notification } from "./types/type";

export default function Notification({
  name,
  result,
  elapsedTime,
  formattedTime,
}: Notification) {
  return (
    <Wrapper>
      <Image src={notificationCircle} alt="notification_status_icon" />
      <p>
        {name}
        {formattedTime} 공고 지원이 {result === "accepted" ? "승인" : "거절"}
        되었어요.
      </p>
      <ElapsedTime>{elapsedTime}</ElapsedTime>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  font-size: 14px;

  border-radius: 5px;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  background: var(--The-julge-white, #fff);
`;

const ElapsedTime = styled.span`
  color: var(--The-julge-gray-40, #a4a1aa);
  font-size: 12px;
`;
