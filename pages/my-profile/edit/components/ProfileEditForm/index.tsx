import { useForm } from "react-hook-form";
import Button from "@/components/Button/Button";
import styled from "@emotion/styled";
import Title from "./Title";
import FormContent from "./FormContent";

type EditFormData = {
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
  } = useForm<EditFormData>({ mode: "onChange" });

  const onSubmit = (formData: EditFormData) => {
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>내 프로필</Title>
      <FormContent register={register} errors={errors} />
      <ButtonContainer>
        <Button text="등록하기" type="submit" />
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

const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 312px;

  @media (max-width: 375px) {
    margin: 0 0;
    width: 100%;
  }
`;
