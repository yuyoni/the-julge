import Button from "@/components/Button/Button";
import Table, { History } from "@/components/Table";
import { body1Regular, body2Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import Link from "next/link";

type HistoryTableProps = {
  histories: History[];
};

export default function HistoryTable({ histories }: HistoryTableProps) {
  return (
    <>
      {histories.length !== 0 ? (
        <Table histories={histories} />
      ) : (
        <Wrapper>
          <Description>아직 신청 내역이 없어요</Description>
          <ButtonContainer>
            <Link href="/">
              <Button text="공고 보러가기" />
            </Link>
          </ButtonContainer>
        </Wrapper>
      )}
    </>
  );
}

const Description = styled.span`
  ${body1Regular}

  @media (max-width: 767px) {
    ${body2Regular}
  }
`;

const ButtonContainer = styled.div`
  width: 346px;
  height: 47px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 60px 24px;
  gap: 24px;

  @media (max-width: 767px) {
    gap: 16px;
  }
`;
