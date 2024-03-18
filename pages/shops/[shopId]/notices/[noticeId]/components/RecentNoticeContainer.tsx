import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import RecentNotice from "./RecentNotice";

interface RecentNotice {
  shopId: string;
  noticeId: string;
}

type RecentNoticeList = RecentNotice[];

export default function RecentNoticeContainer() {
  const [recentNoticeList, setRecentNoticeList] = useState<RecentNoticeList>(
    [],
  );

  useEffect(() => {
    const shopIdListString = localStorage.getItem("shopIdList");
    const noticeIdListString = localStorage.getItem("noticeIdList");

    if (noticeIdListString && shopIdListString) {
      const shopIdList = JSON.parse(shopIdListString);
      const noticeIdList = JSON.parse(noticeIdListString);

      const newRecentNoticeList = noticeIdList.map(
        (noticeId: string, index: number) => {
          return { shopId: shopIdList[index], noticeId: noticeId };
        },
      );

      setRecentNoticeList(newRecentNoticeList);
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        {recentNoticeList.map((notice, index) => (
          <RecentNotice
            key={notice.noticeId}
            recentNoticeId={notice}
            index={index}
          />
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: flex-start;
  padding: 60px 238px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px 14px;
`;
