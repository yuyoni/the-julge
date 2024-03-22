import { FieldError, UseFormRegister } from "react-hook-form";
import { EMPTY_INPUT } from "@/lib/constants/errorMessage";
import Input from "@/components/Input";
import styled from "@emotion/styled";
import TextArea from "./TextArea";

type EditFormData = {
  name: string;
  phone: string;
  address: string;
  bio: string;
};

type EditFormInput = {
  label: "name" | "phone" | "address" | "bio";
  register: UseFormRegister<EditFormData>;
  error?: FieldError;
};

const labelType = {
  name: "이름*",
  phone: "연락처*",
  address: "선호 지역",
  bio: "소개",
};

const essentialInput = ["name", "phone"];

export default function EditFormInput({
  label,
  register,
  error,
}: EditFormInput) {
  return (
    <>
      {label === "bio" ? (
        <TextArea label="bio" error={error} register={register(label)} />
      ) : (
        <InputContainer>
          <Input
            label={labelType[label]}
            isStatic={false}
            register={register(label, {
              required: {
                value: essentialInput.includes(label),
                message: EMPTY_INPUT,
              },
            })}
            error={error}
          />
        </InputContainer>
      )}
    </>
  );
}

const InputContainer = styled.div`
  width: 308px;

  @media (max-width: 1023px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;
