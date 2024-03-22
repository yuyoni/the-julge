import { FieldErrors, UseFormRegister } from "react-hook-form";
import { addressArray } from "@/lib/constants/options";
import { body1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import EditFormInput from "./EditFormInput";
import DropDown from "@/components/DropDown";

type EditFormData = {
  name: string;
  phone: string;
  address: string;
  bio: string;
};

type FormContentProps = {
  register: UseFormRegister<EditFormData>;
  errors?: FieldErrors<EditFormData>;
  selectAddress: (address: string) => void;
};

export default function FormContent({
  register,
  errors,
  selectAddress,
}: FormContentProps) {
  const {
    name: nameError,
    phone: phoneError,
    bio: bioError,
  } = errors as FieldErrors<EditFormData>;

  return (
    <Wrapper>
      <InputContainer>
        <EditFormInput label="name" register={register} error={nameError} />
        <EditFormInput label="phone" register={register} error={phoneError} />
        <DropDownContainer>
          <DropDown
            label="선호 지역"
            categories={addressArray}
            onCategoryChange={selectAddress}
          />
        </DropDownContainer>
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

const DropDownContainer = styled.div`
  width: 308px;

  @media (max-width: 1023px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;
