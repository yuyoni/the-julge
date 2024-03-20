import useCookie from "@/hooks/useCookies";
import { UserData } from "@/lib/types/userType";
import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type UserContextType = {
  userInfo: UserData | null;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType>({
  userInfo: null,
});

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: UserProviderProps) {
  const { id } = useCookie();
  const [userInfo, setUserInfo] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/${id}`);
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  return (
    <UserContext.Provider value={{ userInfo }}>{children}</UserContext.Provider>
  );
}
