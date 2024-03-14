import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/3-3/the-julge/";

export default async function fetchData(param: string) {
  const response = await axios.get(`${BASE_URL}${param}`);
  return response.data;
}
