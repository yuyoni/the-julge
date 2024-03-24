import ApplicationHistory from "./components/ApplyHistory";
import Layout from "@/components/Layout";
import UserProfile from "./components/UserProfile";
import styled from "@emotion/styled";
import useProfileData from "./hooks/useProfileData";
import useApplicationHistory from "./hooks/useApplicationHistory";
import MetaHead from "@/components/MetaHead";
import useCookie from "@/hooks/useCookies";
import ModalContent from "../shops/[shopId]/notices/[noticeId]/components/ModalContent";
import { useRouter } from "next/router";

export default function MyProfile() {
  const { userType } = useCookie();
  const router = useRouter();
  const profileData = useProfileData();
  const applicationHistory = useApplicationHistory();

  if (userType && userType !== "employee")
    return (
      <ModalContent
        modalIcon="alert"
        modalText="권한이 없습니다"
        handleYesClick={() => {
          router.push("/");
        }}
      />
    );

  return (
    <>
      <Layout>
        <UserProfile {...profileData} />
        <Wrapper>
          <ApplicationHistory {...applicationHistory} />
        </Wrapper>
      </Layout>
    </>
  );
}

const Wrapper = styled.div`
  background-color: var(--The-julge-gray-05);
`;
