import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { body1Regular } from "@/styles/fontsStyle";
import { InputProps } from "./types/types";
import InputContent from "./components/InputContent";

export default function Input({
  label,
  type = "text",
  placeholder = "입력",
  value,
  onChange,
  includeText,
  includeImage,
  handleClick,
  error,
}: InputProps) {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <InputWrapper>
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <InputContent
          includeText={includeText}
          includeImage={includeImage}
          handleClick={handleClick}
        />
      </InputWrapper>
    </InputContainer>
  );
}

const customBody1Regular = css`
  ${body1Regular};
  color: var(--The-julge-black);
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const StyledInput = styled.input`
  ${customBody1Regular}
  display: flex;
  padding: 16px 20px;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid var(--The-julge-gray-30);
  background: var(--The-julge-white);

  ::placeholder {
    color: var(--The-julge-gray-40);
  }
`;

const StyledLabel = styled.label`
  ${customBody1Regular}
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
