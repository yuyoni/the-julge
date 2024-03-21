import { h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import RecentNotice from "./RecentNotice";

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
      <Container>
        {recentNoticeList.length ? (
          recentNoticeList.map((notice, index) => (
            <RecentNotice key={notice} noticeHref={notice} index={index} />
          ))
        ) : (
          <NoRecentNotice>최근에 본 공고가 없습니다.</NoRecentNotice>
        )}
      </Container>
    </Wrapper>
  );
}

const Title = styled.span`
  ${h1Regular}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: flex-start;
  padding: 60px 32px;
`;

const Container = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  gap: 32px 14px;

  @media only screen and (max-width: 768px) {
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  }
`;

const NoRecentNotice = styled.div`
  display: flex;
  width: 964px;
  padding: 60px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
