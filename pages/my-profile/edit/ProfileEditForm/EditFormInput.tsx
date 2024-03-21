import { UseFormRegister } from "react-hook-form";
import { body1Regular } from "@/styles/fontsStyle";
import Input from "@/components/Input";
import styled from "@emotion/styled";

type EditForm = {
  name: string;
  phone: string;
  address: string;
  bio: string;
};

type EditFormInput = {
  label: "name" | "phone" | "address" | "bio";
  register: UseFormRegister<EditForm>;
};

const labelType = {
  name: "이름*",
  phone: "연락처*",
  address: "선호 지역",
  bio: "소개",
};

export default function EditFormInput({ label, register }: EditFormInput) {
  return (
    <>
      {label === "bio" ? (
        <>
          <div>소개</div>
          <TextArea placeholder="입력" {...register("name")} />
        </>
      ) : (
        <Wrapper>
          <Input
            label={labelType[label]}
            isStatic={false}
            register={register("name")}
          />
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  width: 308px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 1023px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
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

  ${body1Regular}
`;
