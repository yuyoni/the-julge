import React, { useCallback, useState, ChangeEvent } from "react";
import styled from "@emotion/styled";
import createPresinedURL from "./imageRequest";
import Image from "next/image";
import cameraIcon from "@/public/images/camera-icon.svg";
import useCookie from "@/hooks/useCookies";
import { useMutation } from "react-query";

const Container = styled.div`
  display: flex;
  justify-content: center;
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
  #upload_pop_wrapper {
    height: auto;
    background-color: #fff;
    align-self: center;
    header {
      color: white;
      background-color: lightskyblue;
    }
    main#have_border_line {
      border: dashed 2px lightskyblue;
      margin: 30px 60px;
      height: 334px;
    }
    main {
      width: 720px;
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
      background-color: lightskyblue;
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
      if (data) handleImg("imageUrl", data);
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
      <div id="upload_pop_wrapper">
        <header>Upload Files</header>
        <main id="have_border_line">
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
                <Image
                  src={previewUrl}
                  alt="Preview"
                  width={400}
                  height={400}
                />
              )}
              <p>{fileInfo?.name}</p>
            </div>
          )}
        </main>
        <input
          type="file"
          accept="image/jpeg,image/png,image/tiff"
          id="fileUpload"
          hidden
          onChange={onSelectFile}
        />
      </div>
    </Container>
  );
}
