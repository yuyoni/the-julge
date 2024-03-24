import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Children {
  children: ReactNode;
  onClick?: (event?: any) => void;
}

export default function Dimmed({ children, onClick }: Children) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;
