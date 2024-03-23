import { h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import RecentNotice from "./RecentNotice";
import Button from "@/components/Button/Button";

export type NoticeHref = string;
type RecentNoticeHrefList = NoticeHref[];

export default function RecentNoticeContainer() {
  const [recentNoticeList, setRecentNoticeList] =
    useState<RecentNoticeHrefList>([]);

  useEffect(() => {
    const noticeHrefListString = localStorage.getItem("noticeHrefList");

    if (noticeHrefListString) {
      const noticeHrefList = JSON.parse(noticeHrefListString);
      setRecentNoticeList(noticeHrefList);
    }
  }, []);

  return (
    <Wrapper>
      <Title>최근에 본 공고</Title>
      {recentNoticeList.length ? (
        <Container>
          {recentNoticeList.map((notice, index) => (
            <RecentNotice key={notice} noticeHref={notice} index={index} />
          ))}
        </Container>
      ) : (
        <NoRecentNotice>
          최근에 본 공고가 없습니다.
          <ButtonWrapper>
            <Button color="colored" text="공고 보러가기" />
          </ButtonWrapper>
        </NoRecentNotice>
      )}
    </Wrapper>
  );
}

const Title = styled.span`
  ${h1Regular}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  justify-content: flex-start;
  padding: 60px 32px;
`;

const Container = styled.div`
  display: grid;
  grid-auto-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 14px;

  @media only screen and (max-width: 768px) {
    grid-auto-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NoRecentNotice = styled.div`
  display: flex;
  max-width: 964px;
  width: 100%;
  padding: 60px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
`;

const ButtonWrapper = styled.div`
  width: 320px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
