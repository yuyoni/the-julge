import { ReactNode } from "react";
import Footer from "@/components/Footer/index";
import Gnb from "@/components/Gnb/index";

type Children = {
  children: ReactNode;
};

export default function Layout({ children }: Children) {
  return (
    <>
      {/* userType 부분은 guest로 고정 추후 회원 권한 부여 및 유저기능이 완료되면 해당 prop은 삭제 */}
      <Gnb userType="guest" />
      <div>{children}</div>
      <Footer />
    </>
  );
}
