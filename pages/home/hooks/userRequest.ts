import axios from "axios";

//추후에 env 등으로 뺄 예쩡
const URL = "https://bootcamp-api.codeit.kr/api/0-1/the-julge";

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
