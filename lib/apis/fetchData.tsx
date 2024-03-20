import { HttpMethod } from "@/lib/types/apiTypes";
import axios, { AxiosResponse, AxiosError } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

axios.defaults.headers.common["Content-Type"] = "application/json";

interface FetchDataOptions {
  param: string;
  method?: "get" | "post" | "put";
  requestData?: any;
  token?: string;
}

export default async function fetchData<T>({
  param,
  method = "get",
  requestData = {},
  token,
}: FetchDataOptions): Promise<T> {
  const url = `${BASE_URL}/${param}`;

  try {
    let response: AxiosResponse<T>;

    if (token) {
      response = await axios[method](url, requestData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
    } else {
      response = await axios[method](url, requestData);
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
