import Layout from "@/components/Layout";
import Profile from "./Profile";
import ApplyHistory from "./ApplyHistory";
import styled from "@emotion/styled";

export default function MyProfile() {
  return (
    <Layout>
      <Profile />
      <Wrapper>
        <ApplyHistory />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background-color: var(--The-julge-gray-05);
`;
