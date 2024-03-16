import { SelectedLocationList } from "@/components/Filter/types/types";
import axios from "axios";

//추후에 env 등으로 뺄 예쩡
const URL = "https://bootcamp-api.codeit.kr/api/0-1/the-julge";

interface GetNoticesProp {
  limit: number;
  offset: number;
  sortStr: string;
  keyword?: string;
  startsAtValue: string;
  hourlyPayValue: string;
  address: SelectedLocationList;
}

export const fetchUser = async (userId: string) => {
  const { data } = await axios.get(`${URL}/users/${userId}`);
  return data;
};

export const fetchNotices = async (address: string) => {
  const { data } = await axios.get(
    `${URL}/notices?address=${encodeURIComponent(address)}`,
  );
  return data;
};

export const fetchAllNotices = async () => {
  fetchNotices("");
};

export const getNotices = async ({
  limit,
  offset,
  sortStr,
  keyword,
  startsAtValue,
  hourlyPayValue,
  address,
}: GetNoticesProp) => {
  let query = "";

  if (offset) {
    query += `offset=${offset}`;
  }
  if (limit) {
    query += `&limit=${limit}`;
  }
  if (address?.length) {
    address.forEach((adr) => {
      query += `&address=${adr}`;
    });
  }

  if (keyword) {
    query += `&keyword=${keyword}`;
  }
  if (startsAtValue) {
    query += `&startsAtGte=${startsAtValue}`;
  }
  if (hourlyPayValue) {
    query += `&hourlyPayGte=${hourlyPayValue}`;
  }
  if (sortStr) {
    query += `&sort=${sortStr}`;
  }

  const { data } = await axios.get(`${URL}/notices?${query}`);
  return data;
};
