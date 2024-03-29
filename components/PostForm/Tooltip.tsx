import styled from "@emotion/styled";
import React from "react";

interface ToolTipProps {
  visible: boolean;
  message: string;
}

export default function Tooltip({ visible, message }: ToolTipProps) {
  return visible && <Wrapper>{message}</Wrapper>;
}

const Wrapper = styled.span`
  position: absolute;
  top: 2px;
  left: 42px;
  font-size: 12px;
  color: white;
  padding-left: 8px;
  padding-right: 8px;
  background: var(--The-julge-gray-40);
  border-radius: 4px;
  position: absolute;
  top: -30px;
  left: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 48px;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: var(--The-julge-gray-40) transparent transparent transparent;
  }
`;
