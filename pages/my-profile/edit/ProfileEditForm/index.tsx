import { useForm } from "react-hook-form";
import { body1Regular, h1Regular, h3 } from "@/styles/fontsStyle";
import Button from "@/components/Button/Button";
import styled from "@emotion/styled";
import EditFormInput from "./EditFormInput";
import Image from "next/image";
import Link from "next/link";

type EditForm = {
  name: string;
  phone: string;
  address: string;
  bio: string;
};

export default function ProfileEditForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<EditForm>({ mode: "onChange" });
  return (
    <Form>
      <Title>
        내 프로필
        <Link href="/my-profile">
          <Image
            src="/images/close_icon.svg"
            alt="닫기 버튼"
            width={32}
            height={32}
          />
        </Link>
      </Title>
      <FormContent>
        <InputContainer>
          <EditFormInput label="name" register={register} />
          <EditFormInput label="phone" register={register} />
          <EditFormInput label="address" register={register} />
        </InputContainer>
        <TextAreaContainier>
          <EditFormInput label="bio" {...register} register={register} />
        </TextAreaContainier>
      </FormContent>
      <ButtonContainer>
        <Button text="등록하기" />
      </ButtonContainer>
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  max-width: 964px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 0;
  background-color: var(--The-julge-gray-05);
  gap: 32px;

  @media (max-width: 1023px) {
    padding: 60px 32px;
  }

  @media (max-width: 767px) {
    padding: 40px 12px;
    gap: 15px;
  }
`;

const Title = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${h1Regular}

  @media (max-width: 767px) {
    ${h3}
  }
`;

const FormContent = styled.div`
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

const TextAreaContainier = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 312px;

  @media (max-width: 375px) {
    margin: 0 0;
    width: 100%;
  }
`;
