import styled from "@emotion/styled";
import { InputComponentProps } from "./types/types";

export default function InputComponent({
  placeholder,
  gridArea,
  unit,
  type = "text",
  onChange,
}: InputComponentProps) {
  return (
    <div style={{ position: "relative", width: "100%", gridArea: gridArea }}>
      <Input placeholder={placeholder} type={type} onChange={onChange} />
      <span
        style={{
          position: "absolute",
          top: "16px",
          right: "20px",
          fontSize: "16px",
        }}
      >
        {unit}
      </span>
    </div>
  );
}

const Input = styled.input<{ type: string }>`
  display: flex;
  padding: 16px 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  font-size: 16px;

  border-radius: 6px;
  border: 1px solid var(--The-julge-gray-30, #cbc9cf);
  background: var(--The-julge-white, #fff);

  ${({ type }) =>
    type === "datetime-local" &&
    `
  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }

  &::-webkit-calendar-picker-indicator:hover {
    transform: scale(1.2);
  }

  &::-webkit-calendar-picker-indicator:active {
    transform: scale(1.0);
  }
`}
`;
