import { useForm } from "react-hook-form";
import { SignupFormData } from "../../types/types";
import { validateSignupData } from "@/lib/utils/validateFormData";
import { useRouter } from "next/router";
import { INVALID_EMAIL, INVALID_PASSWORD } from "@/lib/constants/errorMessage";
import Button from "@/components/Button/Button";
import styled from "@emotion/styled";
import Input from "@/components/Input";
import axios from "axios";
import UserTypeSelect from "../UserTypeSelect";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

const BASE_URL = "https://bootcamp-api.codeit.kr/api/3-3/the-julge";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupFormData>({ mode: "onChange" });
  const router = useRouter();

  const {
    email: emailError,
    password: passwordError,
    passwordCheck: passwordCheckError,
  } = errors;

  const onSubmit = async (formData: SignupFormData) => {
    try {
      validateSignupData(formData);
      const { data } = await axios.post(`${BASE_URL}/users`, formData);
      console.log(data);
      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { message } = error.response.data;
        alert(message);
      } else if (error instanceof TypeError) {
        alert(error.message);
      }
    }
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
      <Input
        label="비밀번호 확인"
        error={passwordCheckError}
        type="password"
        register={register("passwordCheck", {
          pattern: {
            value: passwordRegex,
            message: INVALID_PASSWORD,
          },
        })}
      />
      <UserTypeSelect />
      <Button text="가입하기" />
    </Form>
  );
}

const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  button {
    font-size: 16px;
  }
`;
