import Layout from "@/components/Layout";
import styled from "@emotion/styled";
import ProfileEditForm from "./components/ProfileEditForm";

export default function ProfileEdit() {
  return (
    <Layout>
      <Wrapper>
        <ProfileEditForm />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background-color: var(--The-julge-gray-05);
`;
