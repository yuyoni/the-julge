import styled from "@emotion/styled";

interface ToastProps {
  message: string;
}

export default function Toast({ message }: ToastProps) {
  return <Wrapper>{message}</Wrapper>;
}

const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);

  background-color: #b182d5be;
  color: var(--The-julge-gray-00);
  padding: 10px 20px;
  border-radius: 5px;

  z-index: 999;
`;
