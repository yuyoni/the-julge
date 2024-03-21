import axios from "axios";

const URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getUserNotiList = async (userId: string, accessToken: string) => {
  const { data } = await axios.get(`${URL}/users/${userId}/alerts`, {
    headers: {
      Authorization: `${accessToken}`,
    },
  });

  return data;
};
