import fetchData from "@/lib/apis/fetchData";
import axios from "axios";

//const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function createPresinedURL(file: File, token: any) {
  console.log(token); //TODO 콘솔
  try {
    const response: {
      item: {
        url: string;
      };
    } = await fetchData({
      param: "/images",
      method: "post",
      requestData: { name: file.name },
      token: token, //TODO 토큰값 임의로 안 넣어도 동작하는지
    });
    if (response?.item.url) {
      const s3Res = await uploadImageToS3(response.item.url, file);
      if (s3Res) return response.item.url;
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
}

async function uploadImageToS3(url: string, file: File) {
  try {
    const response = await axios.put(url, file);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
