import { body1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import InputComponent from "./InputComponent";
import { FormContainerProps } from "./types/types";

export default function FormContainer({
  label,
  gridArea,
  inputProps,
}: FormContainerProps) {
  return (
    <>
      <Label gridArea={gridArea}>{label}</Label>
      {gridArea === "description" ? (
        <TextArea placeholder="공고 상세" gridArea={`${gridArea}_input`} />
      ) : (
        <InputComponent {...inputProps} gridArea={`${gridArea}_input`} />
      )}
    </>
  );
}

const Label = styled.label<{ gridArea: string }>`
  grid-area: ${({ gridArea }) => gridArea};
`;

const TextArea = styled.textarea<{ gridArea: string }>`
  display: flex;
  height: 153px;
  width: 100%;
  padding: 16px 20px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  resize: none;

  border-radius: 6px;
  border: 1px solid var(--The-julge-gray-30, #cbc9cf);
  background: var(--The-julge-white, #fff);

  grid-area: ${({ gridArea }) => gridArea};

  ${body1Regular}
`;
