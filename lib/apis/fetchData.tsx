import { HttpMethod } from "@/types/apiTypes";
import axios from "axios";

// 임시 토큰 - 사장님
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjMDNhNjUyYy1iMWM5LTRkYjctYWNhZS03OTczMjZmNGFkZmIiLCJpYXQiOjE3MTA0OTYzNDJ9.hd-yKlpEAVWEc4Q8izhz83_atZZ1YbritHJbPWpxSm8";

// 임시로 0기 데이터로 설정
const BASE_URL = "https://bootcamp-api.codeit.kr/api/0-1/the-julge/";

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
        const response = await axios.get(`${BASE_URL}${param}`, { headers });
        return response.data;
      }
      case "POST": {
        const response = await axios.post(`${BASE_URL}${param}`, requestData, {
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
