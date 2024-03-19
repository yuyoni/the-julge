import axios from "axios";

export type AuthInfo = {
  jwt: string;
  userType: string;
  id: string;
};

export default async function getCookies(): Promise<AuthInfo> {
  const { data } = await axios.post(`/api/auth`);
  return data;
}
