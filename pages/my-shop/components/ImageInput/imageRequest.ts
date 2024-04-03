import fetchData from "@/lib/apis/fetchData";
import axios from "axios";

export default async function createPresinedURL(file: File, token: any) {
  try {
    const response: {
      item: {
        url: string;
      };
    } = await fetchData({
      param: "/images",
      method: "post",
      requestData: { name: file.name },
      token: token,
    });
    if (response?.item.url) {
      const s3Res = await uploadImageToS3(response.item.url, file);
      if (s3Res) return response.item.url;
      throw new Error();
    }
  } catch (error) {
    console.error(error);
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
    console.error(error);
    return false;
  }
}
