import React, { useCallback, useState, ChangeEvent } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import createPresinedURL from "./imageRequest";
import Image from "next/image";
import cameraIcon from "@/public/images/camera-icon.svg";
import useCookie from "@/hooks/useCookies";
import { useMutation } from "react-query";
import { body1Regular } from "@/styles/fontsStyle";

type ImgProps = { handleImg: (key: string, value: string | number) => void };

export default function ImageInput({ handleImg }: ImgProps) {
  const [fileInfo, setFileInfo] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { jwt: token } = useCookie();

  const fileCheck = useCallback((type: string) => {
    const filetype = type.split("/")[1];
    const extArr = ["jpg", "jpeg", "png", "tif", "tiff"];
    return extArr.includes(filetype);
  }, []);

  const mutation = useMutation({
    mutationFn: (selectedFile: File) => createPresinedURL(selectedFile, token),
    onSuccess: (data) => {
      console.log(data);
      if (data) {
        const urlWithoutQueryParams = data.split("?")[0];
        handleImg("imageUrl", urlWithoutQueryParams);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSelectFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile && fileCheck(selectedFile.type)) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
      console.log(selectedFile);
      setFileInfo(selectedFile);
      mutation.mutate(selectedFile);
    } else {
      alert("jpeg, png, tiff 파일만 업로드 가능합니다.");
    }
  }, []);

  return (
    <Container>
      <ImageInputWrapper>
        <StyledLabel>가게 이미지</StyledLabel>
        <SelectImage>
          {!fileInfo ? (
            <>
              <Image src={cameraIcon} alt="카메라 아이콘" />
              <span>이미지 추가하기</span>
              <label htmlFor="fileUpload">
                <div id="upload_button">SELECT</div>
              </label>
            </>
          ) : (
            <div>
              {previewUrl && (
                <StyledImage
                  src={previewUrl}
                  alt="Preview"
                  width={400}
                  height={400}
                />
              )}
              <p>{fileInfo?.name}</p>
            </div>
          )}
        </SelectImage>

        <input
          type="file"
          accept="image/jpeg,image/png,image/tiff"
          id="fileUpload"
          hidden
          onChange={onSelectFile}
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

  header {
    width: 100%;
    height: 38px;
    padding: 0 15px;
    line-height: 38px;
    font-size: 16px;
    font-weight: 600;
    #upload_pop_close {
      float: right;
      cursor: pointer;
    }
  }

    main {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        font-size: 20px;
        font-weight: 600;
      }
      span {
        font-size: 17px;
      }
    }
    #upload_button {
      width: 200px;
      height: 43px;
      border-radius: 4px;
      color: white;
      background-color: var(--The-julge-purple-10);
      text-align: center;
      line-height: 43px;
      font-size: 18px;
      font-weight: 600;
      margin: 0 auto;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      margin-bottom: 30px;
    }
  }
`;

const ImageInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
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
`;
