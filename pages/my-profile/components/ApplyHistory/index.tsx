import { body1Regular, body2Regular, h1Regular, h3 } from "@/styles/fontsStyle";
import Table, { Data } from "@/components/Table";
import styled from "@emotion/styled";
import Link from "next/link";
import Button from "@/components/Button/Button";

export type ApplicationHistoryProps = {
  type: "employer" | "employee";
  limit: number;
  count: number;
  items: Data[];
};

export default function ApplicationHistory({
  type,
  limit,
  count,
  items,
}: ApplicationHistoryProps) {
  return (
    <Wrapper>
      <Title>신청 내역</Title>

      {items.length > 0 ? (
        <Table type={type} limit={limit} count={count} dataList={items} />
      ) : (
        <NoApplication>
          <Description>아직 신청 내역이 없어요</Description>
          <ButtonContainer>
            <Link href="/">
              <Button text="공고 보러가기" />
            </Link>
          </ButtonContainer>
        </NoApplication>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 964px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;
  padding: 60px 0 120px;

  @media (max-width: 1023px) {
    padding: 60px 32px 120px;
  }

  @media (max-width: 767px) {
    padding: 40px 12px 80px;
    gap: 15px;
  }
`;

const Title = styled.span`
  ${h1Regular}

  @media (max-width: 767px) {
    ${h3}
  }
`;

const NoApplication = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20);
  padding: 60px 24px;
  gap: 24px;

  @media (max-width: 767px) {
    gap: 16px;
  }
`;

const Description = styled.span`
  ${body1Regular}

  @media (max-width: 767px) {
    ${body2Regular}
  }
`;

const ButtonContainer = styled.div`
  width: 346px;
  height: 47px;

  @media (max-width: 767px) {
    width: 150px;
    height: 37px;
  }
`;
