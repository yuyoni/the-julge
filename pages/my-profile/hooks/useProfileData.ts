import { useEffect, useState } from "react";
import useCookie from "@/hooks/useCookies";
import axios from "axios";

type UserProfile = {
  name: string;
  phone: string;
  address: string;
  bio: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function useProfileData() {
  const { id } = useCookie();
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    phone: "",
    address: "",
    bio: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/users/${id}`);

        const { name, phone, address, bio } = data.item;
        setProfile((prev) => ({ ...prev, name, phone, address, bio }));
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { message } = error.response.data;
          alert(message);
        }
      }
    };
    fetchData();
  }, [id]);

  return profile;
}
