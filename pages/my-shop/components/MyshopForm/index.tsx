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

interface MyShopFormProps {
  value?: string | undefined;
  param: string;
  method: "post" | "put";
  initialData?: ShopInfo | null;
}

export default function MyShopForm({
  value,
  param,
  method,
  initialData,
}: MyShopFormProps) {
  const { showToast } = useToast();
  const router = useRouter();
  const { jwt: token } = useCookie();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    address1: "",
    imageUrl: "",
    address2: "",
    description: "",
    originalHourlyPay: 0,
  });
  //TODO 편집페이지 기존값 유지하고 싶음 ㅡ_ㅡ
  useEffect(() => {
    console.log("initialData", initialData);
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    try {
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
        showToast("모든 값을 채워주세요"); //TODO 모달로 바꾸기
        return;
      }
      if (method === "post") {
        showToast("가게 등록@");
      } else {
        showToast("편집이 완료됐습니당나귀");
      }

      const response = await fetchData({
        param: param,
        method: method,
        requestData: formData,
        token: token,
      });

      if (response) router.push("/my-shop");

      throw new Error();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message);
      }
    }
  };

  const handleInputChange = (key: string, value: string | number) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    console.log(`${key}:${value}`);
  };

  const handleConfirmClick = () => {
    setIsModalOpen(false);
    console.log("클릭");
    router.push("/my-shop");
  };
  const handleCategory = (category: string) => {
    if (categoriesArray.some((e) => e === category)) {
      handleInputChange("category", category);
      return;
    }
    handleInputChange("address1", category);
  };

  const buttonText = method === "put" ? "편집하기" : "등록하기";

  return (
    <FormContainer>
      <FormWrapper>
        <Input
          onChange={(event) => handleInputChange("name", event.target.value)}
          label="가게 이름*"
        />
        <DropDown
          label="분류*"
          categories={categoriesArray}
          onCategoryChange={handleCategory}
        />
      </FormWrapper>
      <FormWrapper>
        <DropDown
          label="주소*"
          categories={addressArray}
          onCategoryChange={handleCategory}
        />
        <Input
          onChange={(event) =>
            handleInputChange("address2", event.target.value)
          }
          label="상세 주소*"
        />
      </FormWrapper>
      <FormWrapper>
        <Input
          onChange={(event) =>
            handleInputChange("originalHourlyPay", event.target.value)
          }
          label="기본 시급*"
          includeText="원"
        />
      </FormWrapper>
      <FormWrapper>
        <ImageInput handleImg={handleInputChange} />
      </FormWrapper>
      <Input
        type="textarea"
        onChange={(event) =>
          handleInputChange("description", event.target.value)
        }
        label="가게 설명"
      />

      <Button
        handleClick={handleSubmit}
        text={buttonText}
        width={312}
        type="button"
      />
      {isModalOpen && (
        <Dimmed>
          <Modal
            modalText="등록되었지비~"
            handleConfirmClick={handleConfirmClick}
          />
        </Dimmed>
      )}
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 32px 0;
  gap: 24px;
`;

const FormWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  width: 100%;
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
