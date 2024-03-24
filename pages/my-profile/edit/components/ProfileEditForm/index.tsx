import { validateProfileData } from "../../utils/validateFormData";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import { useToast } from "@/contexts/ToastContext";
import { useQuery } from "react-query";
import Button from "@/components/Button/Button";
import styled from "@emotion/styled";
import Title from "./Title";
import FormContent from "./FormContent";
import axios from "axios";
import useCookie from "@/hooks/useCookies";

type EditFormData = {
  name: string;
  phone: string;
  address: string;
  bio: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const userInfoType = ["name", "phone", "address", "bio"];

export default function ProfileEditForm() {
  const { showToast } = useToast();
  const router = useRouter();
  const { id, jwt } = useCookie();
  const [address, setAddress] = useState<string>("서울시 종로구");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditFormData>({ mode: "onSubmit" });

  const onSubmit = async (formData: EditFormData) => {
    try {
      validateProfileData(formData);
      await axios.put(
        `${BASE_URL}/users/${id}`,
        { ...formData, address },
        {
          headers: {
            Authorization: jwt,
          },
        },
      );

      showToast("등록이 완료 되었습니다.");
      router.push("/my-profile");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { message } = error.response.data;
        showToast(message);
      } else if (error instanceof TypeError) {
        showToast(error.message);
      }
    }
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users/${id}`);

      return data.item;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { message } = error.response.data;
        showToast(message);
      } else if (error instanceof TypeError) {
        showToast(error.message);
      }
    }
  };
  const { data, isLoading, isSuccess } = useQuery(
    "userInfo",
    () => fetchData(),
    {
      enabled: !!id,
    },
  );

  if (isLoading) return;

  if (isSuccess) {
    userInfoType.forEach((key: any) => {
      setValue(key, data[key]);
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>내 프로필</Title>
      <FormContent
        register={register}
        errors={errors}
        selectAddress={(address: string) => setAddress(address)}
      />
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
