import { useEffect, useState } from "react";
import useCookie from "@/hooks/useCookies";
import axios from "axios";
import { useToast } from "@/contexts/ToastContext";

type UserProfile = {
  name: string;
  phone: string;
  address: string;
  bio: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function useProfileData() {
  const { showToast } = useToast();
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
        if (!id) return;
        const { data } = await axios.get(`${BASE_URL}/users/${id}`);
        const { name = "", phone = "", address = "", bio = "" } = data.item;
        setProfile((prev) => ({ ...prev, name, phone, address, bio }));
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { message } = error.response.data;
          showToast(message);
        }
      }
    };
    fetchData();
  }, [id]);

  return profile;
}
