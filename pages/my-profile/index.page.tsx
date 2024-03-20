import ApplicationHistory from "./components/ApplyHistory";
import Layout from "@/components/Layout";
import UserProfile from "./components/UserProfile";
import styled from "@emotion/styled";
import useProfileData from "./hooks/useProfileData";
import useApplicationHistory from "./hooks/useApplicationHistory";

export default function MyProfile() {
  const profileData = useProfileData();
  const applicationHistory = useApplicationHistory();

  return (
    <Layout>
      <UserProfile {...profileData} />
      <Wrapper>
        <ApplicationHistory {...applicationHistory} />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background-color: var(--The-julge-gray-05);
`;
