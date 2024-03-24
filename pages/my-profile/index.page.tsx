import { useRouter } from "next/router";
import ApplicationHistory from "./components/ApplyHistory";
import Layout from "@/components/Layout";
import UserProfile from "./components/UserProfile";
import styled from "@emotion/styled";
import useApplicationHistory from "./hooks/useApplicationHistory";
import MetaHead from "@/components/MetaHead";
import useCookie from "@/hooks/useCookies";
import ModalContent from "../shops/[shopId]/notices/[noticeId]/components/ModalContent";
import useProfileData from "./hooks/useProfileData";

export default function MyProfile() {
  const { userType } = useCookie();
  const router = useRouter();
  const { data: historyData, isSuccess: isHistoryLoaded } =
    useApplicationHistory();
  const { data: profileData, isSuccess: isProfileLoaded } = useProfileData();

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
      <MetaHead title="+HE JULGE | 내 프로필" />
      <Layout>
        <UserProfile data={profileData} isSuccess={isProfileLoaded} />
        <Wrapper>
          <ApplicationHistory data={historyData} isSuccess={isHistoryLoaded} />
        </Wrapper>
      </Layout>
    </>
  );
}

const Wrapper = styled.div`
  background-color: var(--The-julge-gray-05);
`;
