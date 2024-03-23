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
        alert("모든 값을 채워주세요"); //TODO 모달로 바꾸기
        return;
      }
      if (method === "post") {
        alert("가게 등록@");
      } else {
        alert("편집이 완료됐습니당나귀");
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
            />
          </Selection>
          <Selection>
            <DropDown
              label="분류*"
              categories={categoriesArray}
              onCategoryChange={handleCategory}
            />
          </Selection>
        </FormWrapper>
        <FormWrapper>
          <Selection>
            <DropDown
              label="주소*"
              categories={addressArray}
              onCategoryChange={handleCategory}
            />
          </Selection>
          <Selection>
            <Input
              onChange={(event) =>
                handleInputChange("address2", event.target.value)
              }
              label="상세 주소*"
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
            />
          </Selection>
        </FormWrapper>
        <FormWrapper>
          <ImageInput handleImg={handleInputChange} />
        </FormWrapper>
        <TextArea>
          <Input
            type="textarea"
            onChange={(event) =>
              handleInputChange("description", event.target.value)
            }
            label="가게 설명"
          />
        </TextArea>

        <Button
          handleClick={handleSubmit}
          text={buttonText}
          width={312}
          type="button"
        />
      </FormContainer>
      {isModalOpen && (
        <Dimmed>
          <Modal
            modalText="등록되었지비~"
            handleConfirmClick={handleConfirmClick}
          />
        </Dimmed>
      )}
    </Container>
  );
}

const Container = styled.form`
  position: relative;
  max-width: 964px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
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
