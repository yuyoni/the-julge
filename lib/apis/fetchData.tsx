import { HttpMethod } from "@/types/apiTypes";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN; // 임시로 고정값 사용. 추후 토큰값 저장되면 삭제 예정

export default async function fetchData<T>(
  param: string,
  method: HttpMethod = "GET",
  requestData?: T,
) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  };

  try {
    switch (method) {
      case "GET": {
        const response = await axios.get(`${BASE_URL}/${param}`, { headers });
        return response.data;
      }
      case "POST": {
        const response = await axios.post(`${BASE_URL}/${param}`, requestData, {
          headers,
        });
        return response.data;
      }
      case "PUT": {
        if (!requestData) {
          throw new Error("PUT request requires data.");
        }
        const response = await axios.put(`${BASE_URL}${param}`, requestData, {
          headers,
        });
        return response.data;
      }
      default: {
        throw new Error(`Invalid HTTP method: ${method}`);
      }
    }
  } catch (error) {
    throw new Error(`Request failed: ${error}`);
  }
}
