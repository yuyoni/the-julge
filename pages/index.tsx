import Gnb from "@/components/Gnb";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<
    "guest" | "employee" | "employer" | undefined
  >("guest");

  return (
    <>
      <Gnb userType={user} />
      <button onClick={() => setUser("guest")}>로그인하지 않음</button>
      <button onClick={() => setUser("employee")}>알바님</button>
      <button onClick={() => setUser("employer")}>사장님</button>
    </>
  );
}
