import axios from "axios";

// 임시로 0기 데이터로 설정
const BASE_URL = "https://bootcamp-api.codeit.kr/api/0-1/the-julge/";

export default async function fetchData(param: string) {
  const response = await axios.get(`${BASE_URL}${param}`);
  return response.data;
}
