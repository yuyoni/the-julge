import { useEffect, useState } from "react";
import axios from "axios";
import { useMutation, useQueries, useQuery } from "react-query";
import { useRouter } from "next/router";

export type AuthInfo = {
  jwt: string;
  userType: string;
  id: string;
  isSuccess: boolean;
};

export default function useCookie(): AuthInfo {
  const getUserInfo = async () => {
    try {
      const { data } = await axios.get(`/api/auth`);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, isSuccess } = useQuery("apiauth", getUserInfo, {
    staleTime: 10000,
    cacheTime: 60000,
  });

  return { ...data, isSuccess };
}
