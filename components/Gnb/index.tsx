import { useRouter } from "next/navigation";
import UiGnb from "./components/UiGnb";
import useCookie from "@/hooks/useCookies";

export default function Gnb() {
  const { userType, isSuccess } = useCookie();

  const router = useRouter();

  const handleClickMovePage = (pathname?: string) => {
    router.push(`/${pathname}`);
  };

  if (!isSuccess) {
    return null;
  }

  return (
    <UiGnb userType={userType} handleClickMovePage={handleClickMovePage} />
  );
}
