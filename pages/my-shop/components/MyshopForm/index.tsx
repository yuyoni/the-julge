import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DropDown from "../../../../components/DropDown";
import Input from "../Input";
import { addressArray, categoriesArray } from "@/lib/constants/options";
import Button from "@/components/Button/Button";
import ImageInput from "../ImageInput";
import Modal from "@/components/Modal";
import { ShopInfo } from "../../type/shop-type";
import useCookie from "@/hooks/useCookies";
import fetchData from "@/lib/apis/fetchData";
import { AxiosError } from "axios";
import { useToast } from "@/contexts/ToastContext";
import axios from "axios";
import { useMutation } from "react-query";

interface MyShopFormProps {
  value?: string | undefined;
  param: string;
  method: "post" | "put";
  initialData?: ShopInfo | null;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function MyShopForm({
  value,
  param,
  method,
  initialData,
}: MyShopFormProps) {
  const router = useRouter();
  const { jwt: token } = useCookie();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    category: initialData?.category || "",
    address1: initialData?.address1 || "",
    imageUrl: initialData?.imageUrl || "",
    address2: initialData?.address2 || "",
    description: initialData?.description || "",
    originalHourlyPay: initialData?.originalHourlyPay || 0,
  });
  const { showToast } = useToast();
  //TODO 편집페이지 기존값 유지하고 싶음 ㅡ_ㅡ
  // useEffect(() => {
  //   console.log("initialData", initialData);
  //   if (initialData) {
  //     setFormData(initialData);
  //   }
  // }, [initialData]);

  //TODO formData type 선언 필요
  const handleDataCheck = (formData: any) => {
    const {
      name,
      category,
      address1,
      address2,
      imageUrl,
      description,
      originalHourlyPay,
    } = formData;

    if (
      name === "" ||
      category === "" ||
      address1 === "" ||
      address2 === "" ||
      imageUrl === "" ||
      description === "" ||
      originalHourlyPay === 0
    ) {
      showToast("모든 값을 채워주세요");
      return false;
    }

    return true;
  };

  const postShops = async () => {
    const response = await axios.post(`${BASE_URL}/shops`, formData, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  };

  const putShops = async () => {
    const response = await axios.put(`${BASE_URL}${param}`, formData, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

  const submitMutation = useMutation({
    mutationFn: () => (method === "post" ? postShops() : putShops()),
    onSuccess: () => {
      showToast(
        method === "post" ? "가게가 등록되었습니다." : "수정이 완료되었습니다.",
      );
      router.push("/my-shop");
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        showToast(error.response?.data.message);
      }
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const isValidData = handleDataCheck(formData);
    if (!isValidData) return;
    submitMutation.mutate();
  };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event?.preventDefault();
  //   try {
  //     const isValidData = handleDataCheck(formData);
  //     if (!isValidData) return;
  //     // if (method === "post") {
  //     //   alert("가게 등록@");
  //     // } else {
  //     //   alert("편집이 완료됐습니당나귀");
  //     // }

  //     const response = await axios.post(`${BASE_URL}/shops`, formData, {
  //       headers: {
  //         Authorization: `${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (response) {
  //       setIsModalOpen(true);
  //       return;
  //     }

  //     throw new Error();
  //   } catch (error: unknown) {
  //     if (error instanceof AxiosError) {
  //       showToast(error.response?.data.message);
  //     }
  //   }
  // };

  const handleInputChange = (key: string, value: string | number) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    console.log(`${key}:${value}`);
  };

  // const handleConfirmClick = () => {
  //   setIsModalOpen(false);
  //   console.log("클릭");
  //   router.push("/my-shop");
  // };

  const handleCategory = (category: string) => {
    if (categoriesArray.some((e) => e === category)) {
      handleInputChange("category", category);
      return;
    }
    handleInputChange("address1", category);
  };

  // const buttonText = method === "put" ? "편집하기" : "등록하기";

  return (
    <Container>
      <h1>가게 정보</h1>
      <FormContainer>
        <FormWrapper>
          <Selection>
            <Input
              onChange={(event) =>
                handleInputChange("name", event.target.value)
              }
              label="가게 이름*"
              value={formData.name}
            />
          </Selection>
          <Selection>
            <DropDown
              label="분류*"
              categories={categoriesArray}
              onCategoryChange={handleCategory}
              value={formData.category}
            />
          </Selection>
        </FormWrapper>
        <FormWrapper>
          <Selection>
            <DropDown
              label="주소*"
              categories={addressArray}
              onCategoryChange={handleCategory}
              value={formData.address1}
            />
          </Selection>
          <Selection>
            <Input
              onChange={(event) =>
                handleInputChange("address2", event.target.value)
              }
              label="상세 주소*"
              value={formData.address2}
            />
          </Selection>
        </FormWrapper>
        <FormWrapper>
          <Selection>
            <Input
              onChange={(event) =>
                handleInputChange("originalHourlyPay", event.target.value)
              }
              label="기본 시급*"
              includeText="원"
              type={"number"}
              value={formData.originalHourlyPay}
            />
          </Selection>
        </FormWrapper>
        <FormWrapper>
          <ImageInput handleImg={handleInputChange} value={formData.imageUrl} />
        </FormWrapper>
        <TextArea>
          <Input
            type="textarea"
            onChange={(event) =>
              handleInputChange("description", event.target.value)
            }
            label="가게 설명"
            value={formData.description}
          />
        </TextArea>
        <ButtonWrapper>
          <Button
            handleClick={handleSubmit}
            text={method === "put" ? "편집하기" : "등록하기"}
            width={312}
            type="button"
          />
        </ButtonWrapper>
      </FormContainer>
      {/* {isModalOpen && (
        <Dimmed>
          <Modal
            modalText="등록되었지비~"
            handleConfirmClick={handleConfirmClick}
          />
        </Dimmed>
      )} */}
    </Container>
  );
}

const Container = styled.form`
  position: relative;
  max-width: 964px;
  height: 100%;
  margin: 0 auto;
`;

const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 100%;
margin: 32px 0;
gap: 24px;
}
`;

const FormWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  width: 100%;
`;

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 153px;
`;

const ButtonWrapper = styled.div`
  width: 312px;
  height: 48px;
  margin: 50px auto;
`;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;
