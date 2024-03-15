import { h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import EmployeeTable from "./EmployeeTable";

export default function ApplicantList() {
  return (
    <Wrapper>
      <Title>신청자 목록</Title>
      <EmployeeTable />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 238px;
  gap: 32px;
  background: var(--The-julge-gray-05, #fafafa);
`;

const Title = styled.span`
  ${h1Regular}
`;
