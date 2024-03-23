import { useEffect, useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";

export type AuthInfo = {
  jwt: string;
  userType: string;
  id: string;
  isSuccess: boolean;
};

export default function useCookie(): AuthInfo {
  const [authInfo, setAuthInfo] = useState<AuthInfo>({
    jwt: "",
    userType: "",
    id: "",
    isSuccess: false,
  });

  const getUserInfo = async () => {
    const { data } = await axios.post(`/api/auth`);
    return data;
  };

  const { mutate } = useMutation("api/auth", () => getUserInfo(), {
    onSuccess: (res) => {
      setAuthInfo({ ...res, isSuccess: true });
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  return authInfo;
}
