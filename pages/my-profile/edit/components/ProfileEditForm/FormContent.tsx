import { FieldErrors, UseFormRegister } from "react-hook-form";
import { body1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import EditFormInput from "./EditFormInput";

type EditFormData = {
  name: string;
  phone: string;
  address: string;
  bio: string;
};

type FormContentProps = {
  register: UseFormRegister<EditFormData>;
  errors?: FieldErrors<EditFormData>;
};

export default function FormContent({ register, errors }: FormContentProps) {
  const {
    name: nameError,
    phone: phoneError,
    address: addressError,
    bio: bioError,
  } = errors as FieldErrors<EditFormData>;
  return (
    <Wrapper>
      <InputContainer>
        <EditFormInput label="name" register={register} error={nameError} />
        <EditFormInput label="phone" register={register} error={phoneError} />
        <EditFormInput
          label="address"
          register={register}
          error={addressError}
        />
      </InputContainer>
      <EditFormInput label="bio" register={register} error={bioError} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${body1Regular}
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1023px) {
    justify-content: space-between;
  }
`;
