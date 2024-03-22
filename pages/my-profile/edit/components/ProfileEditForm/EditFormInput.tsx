import { FieldError, UseFormRegister } from "react-hook-form";
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

const errorMessage = {
  default: "필수입니다.",
  name: "이름을 넣어주세요.",
};

export default function EditFormInput({
  label,
  register,
  error,
}: EditFormInput) {
  return (
    <>
      {label === "bio" ? (
        <TextArea
          label="bio"
          error={error}
          register={register(label, {
            required: { value: true, message: errorMessage.default },
          })}
        />
      ) : (
        <InputContainer>
          <Input
            label={labelType[label]}
            isStatic={false}
            register={register(label, {
              required: { value: true, message: errorMessage.default },
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
