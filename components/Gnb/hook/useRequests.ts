import axios from "axios";

//추후에 env 등으로 뺄 예쩡
const URL = "https://bootcamp-api.codeit.kr/api/0-1/the-julge";

export const getUserNotiList = async (userId: string, accessToken: string) => {
  const { data } = await axios.get(`${URL}/users/${userId}/alerts}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};
