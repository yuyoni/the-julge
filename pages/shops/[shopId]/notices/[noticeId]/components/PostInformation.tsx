import getWageIncreaseText from "@/components/Post/utils/getWageIncreaseText";
import formatTimeRange from "@/lib/utils/formatTimeRange";
import { body1Regular, body2Regular, h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import Image from "next/image";
import clockIcon from "@/public/images/clock-icon.svg";
import locationIcon from "@/public/images/location.svg";
import { NoticeList } from "@/lib/types/NoticeTypes";
import WageFlag from "@/components/Post/components/WageFlag";

export default function PostInformation({
  noticeData,
}: {
  noticeData: NoticeList;
}) {
  if (noticeData) {
    const duration = formatTimeRange(
      noticeData.item.startsAt,
      noticeData.item.workhour
    );
    const shopDescription = noticeData.item.shop.item.description;
    const address = `${noticeData.item.shop.item.address1} ${noticeData.item.shop.item.address2}`;
    const hourlyPay = noticeData.item.hourlyPay;
    const originalHourlyPay = noticeData.item.shop.item.originalHourlyPay;
    const wageIncrease = getWageIncreaseText(hourlyPay, originalHourlyPay);

    return (
      <Wrapper>
        <Wage>시급</Wage>
        <WageContainer>
          <HourlyPay>{Number(hourlyPay).toLocaleString()}원</HourlyPay>
          {wageIncrease && (
            <WageFlag
              hourlyPay={hourlyPay}
              originalHourlyPay={originalHourlyPay}
              position="relative"
            />
          )}
        </WageContainer>
        <Container>
          <Image priority src={clockIcon} alt="clock_icon" />
          <InfoStyle>{duration}</InfoStyle>
        </Container>
        <Container>
          <Image priority src={locationIcon} alt="location_icon" />
          <InfoStyle>{address}</InfoStyle>
        </Container>
        <DescriptionStyle>{shopDescription}</DescriptionStyle>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 24px;
  word-wrap: break-word;
`;

const Wage = styled.span`
  ${body1Regular}
  color: var(--The-julge-green-40, #905CB9);
`;

const HourlyPay = styled.span`
  ${h1Regular}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const WageContainer = styled(Container)`
  position: relative;
  gap: 8px;
`;

const InfoStyle = styled.span`
  color: var(--The-julge-gray-50, #7d7986);
  ${body2Regular}
`;

const DescriptionStyle = styled.span`
  ${body2Regular}
  width: 100%;
  height: 78px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
