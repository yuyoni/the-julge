import styled from "@emotion/styled";
import { Notification } from "./types/types";

export default function Notification({
  name,
  result,
  elapsedTime,
  formattedTime,
}: Notification) {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="5"
        viewBox="0 0 5 5"
        fill="none"
      >
        <circle
          cx="2.5"
          cy="2.5"
          r="2.5"
          fill={
            result === "accepted"
              ? "var(--The-julge-blue-20, #0080FF)"
              : "var(--The-julge-red, #EC5A46)"
          }
        />
      </svg>
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
