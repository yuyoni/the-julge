import { ReactNode } from "react";
import Footer from "@/components/Footer/index";
import Gnb from "@/components/Gnb/index";

type Children = {
  children: ReactNode;
};

export default function Layout({ children }: Children) {
  return (
    <>
      <Gnb />
      <div>{children}</div>
      <Footer />
    </>
  );
}
