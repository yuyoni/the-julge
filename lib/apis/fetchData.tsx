import axios, { AxiosResponse } from "axios";
import handleAxiosError from "./handleAxiosError";

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
  const url = `${BASE_URL}${param}`;

  try {
    let response: AxiosResponse<T>;

    if (token) {
      if (method === "get") {
        response = await axios[method](url, {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        });
      } else {
        response = await axios[method](url, requestData, {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        });
      }
    } else {
      response = await axios[method](url, requestData);
    }
    return response.data;
  } catch (error) {
    throw new Error(handleAxiosError(error));
  }
}
