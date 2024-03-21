import { useRouter } from "next/navigation";
import { useState } from "react";
import UiGnb from "./components/UiGnb";
import useCookie from "@/hooks/useCookies";

export default function Gnb() {
  const { userType } = useCookie();

  const router = useRouter();

  const handleClickMovePage = (pathname?: string) => {
    router.push(`/${pathname}`);
  };

  return (
    <UiGnb userType={userType} handleClickMovePage={handleClickMovePage} />
  );
}
