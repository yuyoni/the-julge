import { UseFormRegisterReturn } from "react-hook-form";
import { body1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";

type FormContentProps = {
  register: UseFormRegisterReturn;
};

export default function FormContent({ register }: FormContentProps) {
  return (
    <Wrapper>
      <UpperInput>
        <InputContainer></InputContainer>
      </UpperInput>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${body1Regular}
`;

const UpperInput = styled.div`
  display: flex;
  gap: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label``;
