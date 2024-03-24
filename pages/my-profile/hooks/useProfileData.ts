import { useToast } from "@/contexts/ToastContext";
import { useQuery } from "react-query";
import useCookie from "@/hooks/useCookies";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function useProfileData() {
  const { showToast } = useToast();
  const { id } = useCookie();
  const { data = { name: "", phone: "", address: "", bio: "" }, isSuccess } =
    useQuery("userInfo", () => fetchData(), {
      enabled: !!id,
    });

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users/${id}`);
      const { name = "", phone = "", address = "", bio = "" } = data.item;
      return { name, phone, address, bio };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { message } = error.response.data;
        showToast(message);
      }
    }
  };

  return { data, isSuccess };
}
