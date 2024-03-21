import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import DropDown from "../../../../components/DropDown";
import Input from "../Input";
import { addressArray, categoriesArray } from "@/lib/constants/options";
import Button from "@/components/Button/Button";
import ImageInput from "../ImageInput";
import Modal from "@/components/Modal";
import { ShopInfo } from "./shop-type";
import { useUser } from "@/contexts/UserContext";
import useCookie from "@/hooks/useCookies";
import fetchData from "@/lib/apis/fetchData";
import { registerShop } from "../../register/util/shopRequest";
import { sendRegisterShopRequest } from "../../register/util/sendRegisterShopRequest";

export default function MyShopForm() {
  const router = useRouter();
  const { userInfo } = useUser();
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

      const response = await sendRegisterShopRequest(
        name,
        category,
        address1,
        address2,
        originalHourlyPay,
        imageUrl,
        description,
        token,
      );
      // registerShop 함수 호출
      console.log("Shop registered successfully:", response);
      // 성공적으로 등록된 경우의 로직
    } catch (error) {
      console.error("Error registering shop:", error);
      console.log("token:", token);
      console.log("user", userInfo);
      console.log(formData);
      // 등록 중 오류가 발생한 경우의 로직
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
  return (
    <FormContainer>
      <FormWrapper>
        <Input
          onChange={(event) => handleInputChange("name", event.target.value)}
          label="가게 이름*"
        />
        <DropDown label="분류*" categories={categoriesArray} />
      </FormWrapper>
      <FormWrapper>
        <DropDown label="주소*" categories={addressArray} />
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
        <ImageInput />
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
        text="등록하기"
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
