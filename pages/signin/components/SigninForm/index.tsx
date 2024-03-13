import { useForm } from "react-hook-form";
import { SigninFormData } from "../../types/types";
import { INVALID_EMAIL, INVALID_PASSWORD } from "@/lib/constants/errorMessage";
import Button from "@/components/Button/Button";
import styled from "@emotion/styled";
import Input from "@/components/Input";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const passwordRegex = /^.{8,}$/;

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({ mode: "onChange" });

  const { email: emailError, password: passwordError } = errors;

  const onSubmit = (data: SigninFormData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="이메일"
        error={emailError}
        register={register("email", {
          pattern: {
            value: emailRegex,
            message: INVALID_EMAIL,
          },
        })}
      />
      <Input
        label="비밀번호"
        error={passwordError}
        type="password"
        register={register("password", {
          pattern: {
            value: passwordRegex,
            message: INVALID_PASSWORD,
          },
        })}
      />
      <Button text="로그인 하기" />
    </Form>
  );
}

const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    font-size: 16px;
  }
`;