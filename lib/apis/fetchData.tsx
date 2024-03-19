import { HttpMethod } from "@/lib/types/apiTypes";
import axios, { AxiosResponse, AxiosError } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

axios.defaults.headers.common["Content-Type"] = "application/json";

export default async function fetchData<T>(
  param: string,
  method: HttpMethod = "GET",
  requestData?: any,
) {
  const url = `${BASE_URL}/${param}`;

  try {
    let response: AxiosResponse<T>;

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
