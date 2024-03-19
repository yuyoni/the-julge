import { useEffect, useState } from "react";
import axios from "axios";

export type AuthInfo = {
  jwt: string;
  userType: string;
  id: string;
};

export default function useCookie(): AuthInfo {
  const [authInfo, setAuthInfo] = useState<AuthInfo>({
    jwt: "",
    userType: "",
    id: "",
  });
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.post(`/api/auth`);
      setAuthInfo(data);
    };
    getUserInfo();
  }, []);

  return authInfo;
}
