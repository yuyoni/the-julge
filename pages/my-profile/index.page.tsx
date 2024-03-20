import ApplyHistory from "./ApplyHistory";
import Layout from "@/components/Layout";
import Profile from "./Profile";
import styled from "@emotion/styled";
import useProfileData from "./hooks/useProfileData";
import useApplicationHistory from "./hooks/useApplicationHistory";

export default function MyProfile() {
  const profileData = useProfileData();
  const applicationHistory = useApplicationHistory();

  return (
    <Layout>
      <Profile />
      <Wrapper>
        <ApplyHistory {...applicationHistory} />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background-color: var(--The-julge-gray-05);
`;
