import React, { useCallback, useState, ChangeEvent } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import createPresinedURL from "./imageRequest";
import Image from "next/image";
import cameraIcon from "@/public/images/camera-icon.svg";
import useCookie from "@/hooks/useCookies";
import { useMutation } from "react-query";
import { body1Regular } from "@/styles/fontsStyle";
import { useRef } from "react";

type ImgProps = {
  handleImg: (key: string, value: string | number) => void;
  value?: string;
};

export default function ImageInput({ handleImg, value }: ImgProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(value || null);
  const { jwt: token } = useCookie();

  const fileCheck = useCallback((type: string) => {
    const filetype = type.split("/")[1];
    const extArr = ["jpg", "jpeg", "png", "tif", "tiff"];
    return extArr.includes(filetype);
  }, []);

  const mutation = useMutation({
    mutationFn: (selectedFile: File) => createPresinedURL(selectedFile, token),
    onSuccess: (data) => {
      if (data) {
        const urlWithoutQueryParams = data.split("?")[0];
        handleImg("imageUrl", urlWithoutQueryParams);
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSelectFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile && fileCheck(selectedFile.type)) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
      mutation.mutate(selectedFile);
    } else {
      alert("jpeg, png, tiff 파일만 업로드 가능합니다.");
    }
  }, []);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadImg = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <Container>
      <ImageInputWrapper>
        <StyledLabel>가게 이미지</StyledLabel>
        <SelectImage>
          {!previewUrl ? (
            <NoImageBox>
              <Image src={cameraIcon} alt="카메라 아이콘" />
              <span>이미지 추가하기</span>
              <label htmlFor="fileUpload">
                <StyledButton id="upload_button">SELECT</StyledButton>
              </label>
            </NoImageBox>
          ) : (
            <ImageBox onClick={handleUploadImg} style={{ cursor: "pointer" }}>
              <StyledImage
                src={previewUrl}
                alt="Preview"
                width={400}
                height={400}
              />
            </ImageBox>
          )}
        </SelectImage>

        <input
          type="file"
          accept="image/jpeg,image/png,image/tiff"
          id="fileUpload"
          hidden
          onChange={(e) => onSelectFile(e)}
          ref={inputRef}
        />
      </ImageInputWrapper>
    </Container>
  );
}

const customBody1Regular = css`
  ${body1Regular};
  color: var(--The-julge-black);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 8px;
`;

const NoImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  ${body1Regular};
`;

const ImageBox = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
`;

const StyledButton = styled.div`
  width: 200px;
  height: 43px;
  border-radius: 4px;
  color: white;
  background-color: var(--The-julge-green-05);
  text-align: center;
  line-height: 43px;
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
`;

const ImageInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  justify-content: start;
  gap: 8px;
`;

const StyledLabel = styled.label`
  ${customBody1Regular}
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const SelectImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: var(--The-julge-gray-05);
  height: 300px;
`;
