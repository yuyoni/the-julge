import { HttpMethod } from "@/lib/types/apiTypes";
import axios, { AxiosResponse, AxiosError } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// TOKEN은 추후 수정
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NTczZDM3Zi03M2I1LTQ3NTItYTJkNy1hN2Q5MmVjYzI2OTIiLCJpYXQiOjE3MTA3NzY2NDd9.eFSiPjd6iYC-6q4t6bZAu0fw3Ux2SELMG-0xcRGqIV0";
axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
axios.defaults.headers.common["Content-Type"] = "application/json";

export default async function fetchData(
  param: string,
  method: HttpMethod = "GET",
  requestData?: any,
) {
  const url = `${BASE_URL}/${param}`;

  try {
    let response: AxiosResponse;

    switch (method) {
      case "GET":
        response = await axios.get(url);
        break;
      case "POST":
        response = await axios.post(url, requestData);
        break;
      case "PUT":
        response = await axios.put(url, requestData);
        break;
      default:
        throw new Error("Invalid HTTP method");
    }
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

function handleAxiosError(error: any): never {
  const axiosError = error as AxiosError;
  if (axiosError.response) {
    throw new Error(
      `Request failed with status code ${axiosError.response.status}`,
    );
  } else if (axiosError.request) {
    throw new Error("No response received from server");
  } else {
    throw new Error(`Request failed with message: ${axiosError.message}`);
  }
}
