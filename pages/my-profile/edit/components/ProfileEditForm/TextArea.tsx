import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { body1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";

type TextAreaProps = {
  label: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
};

export default function TextArea({ label, error, register }: TextAreaProps) {
  return (
    <TextAreaContainer>
      <div>소개</div>
      <StyledTextArea placeholder="입력" {...register} hasError={!!error} />
      {error && <Warning>{error.message}</Warning>}
    </TextAreaContainer>
  );
}

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledTextArea = styled.textarea<{ hasError: boolean }>`
  display: flex;
  height: 153px;
  width: 100%;
  padding: 16px 20px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  resize: none;

  border-radius: 6px;
  outline: none;
  border: 1px solid
    ${({ hasError }) =>
      hasError ? "var(--The-julge-rejected)" : "var(--The-julge-gray-30)"};
  background: var(--The-julge-gray-00);
  background: var(--The-julge-white, #fff);

  ${body1Regular}
`;

const Warning = styled.span`
  display: flex;
  padding-left: 8px;
  align-items: flex-start;
  gap: 8px;
  color: var(--The-julge-rejected);
  font-size: 12px;
  font-family: Abel;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
