import styled from "@emotion/styled";
import type { Notification } from "../types/types";
import { body2Regular } from "@/styles/fontsStyle";
import useCookie from "@/hooks/useCookies";
import { useClearNotification } from "../hooks/useUserQuery";

export default function Notification({
  alertId,
  name,
  result,
  elapsedTime,
  formattedTime,
}: Notification) {
  const { id, jwt } = useCookie();
  const mutation = useClearNotification(id, alertId, jwt);

  const handleDeleteNotification = () => {
    mutation.mutate();
  };

  return (
    <Wrapper onClick={handleDeleteNotification}>
      <Container>
        <Circle result={result}></Circle>
        <NotifiText>
          {name} ({formattedTime}) 공고 지원이{" "}
          <Result result={result}>
            {result === "accepted" ? "승인" : "거절"}
          </Result>{" "}
          되었어요.
        </NotifiText>
      </Container>
      <ElapsedTime>{elapsedTime}</ElapsedTime>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 100%;
  padding: 10px 12px;

  border-radius: 5px;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  background: var(--The-julge-white, #fff);
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;
const Circle = styled.div<{ result: string }>`
  display: block;
  min-width: 4px;
  height: 4px;

  background: ${(props) =>
    props.result === "accepted"
      ? "var(--The-julge-blue-20, #0080FF)"
      : "var(--The-julge-rejected, #EC5A46)"};

  border-radius: 50%;
  margin-top: 10px;
`;

const Result = styled.span<{ result: string }>`
  font-weight: 700;
  color: ${(props) =>
    props.result === "accepted"
      ? "var(--The-julge-blue-20, #0080FF)"
      : "var(--The-julge-rejected, #EC5A46)"};
`;
const NotifiText = styled.div`
  color: var(--The-julge-black, #111322);
  text-align: left;
  ${body2Regular}
`;
const ElapsedTime = styled.span`
  color: var(--The-julge-gray-40, #a4a1aa);
  font-size: 12px;
`;
