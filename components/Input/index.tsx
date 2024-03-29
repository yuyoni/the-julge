import { InputProps } from "./types/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function Input({
  label,
  type = "text",
  value,
  error,
  register,
  isStatic = true,
}: InputProps) {
  const hasError: boolean = !!error;

  return (
    <InputWrapper isStatic={isStatic}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        placeholder="입력"
        hasError={hasError}
        {...register}
      />
      {error && <StyledWarning>{error.message}</StyledWarning>}
    </InputWrapper>
  );
}

const commonStyles = css`
  color: var(--The-julge-black);
  font-size: 16px;
  line-height: 26px;
`;

const InputWrapper = styled.div<{ isStatic: boolean }>`
  display: flex;
  width: ${({ isStatic }) => (isStatic ? "350px" : "100%")};
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const StyledInput = styled.input<{ hasError: boolean }>`
  ${commonStyles}
  display: flex;
  padding: 16px 20px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid
    ${({ hasError }) =>
      hasError ? "var(--The-julge-rejected)" : "var(--The-julge-gray-30)"};
  background: var(--The-julge-gray-00);

  ::placeholder {
    color: var(--The-julge-gray-40);
  }
`;

const StyledLabel = styled.label`
  ${commonStyles}
`;

const StyledWarning = styled.span`
  display: flex;
  padding-left: 8px;
  align-items: flex-start;
  gap: 8px;
  color: var(--The-julge-rejected);
  font-size: 12px;
  line-height: 16px;
`;
