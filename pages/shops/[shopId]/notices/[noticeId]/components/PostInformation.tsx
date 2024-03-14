import getWageIncreaseText from "@/components/Post/utils/getWageIncreaseText";
import { NoticeData } from "@/hooks/useNoticeData";
import formatTimeRange from "@/lib/utils/formatTimeRange";
import { body1Regular, body2Regular, h1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import Image from "next/image";
import clockIcon from "@/public/images/clock-icon 1.svg";
import locationIcon from "@/public/images/location.svg";

export default function PostInformation({
  noticeData,
}: {
  noticeData: NoticeData;
}) {
  if (noticeData) {
    const duration = formatTimeRange(
      noticeData.item.startsAt,
      noticeData.item.workhour,
    );
    const shopDescription = noticeData.item.shop.item.description;
    const address = `${noticeData.item.shop.item.address1} ${noticeData.item.shop.item.address2}`;
    const hourlyPay = noticeData.item.hourlyPay;
    const originalHourlyPay = noticeData.item.shop.item.originalHourlyPay;
    const wageIncreaseText = getWageIncreaseText(hourlyPay, originalHourlyPay);

    return (
      <Wrapper>
        <Wage>시급</Wage>
        <WageContainer>
          <HourlyPay>{hourlyPay}원</HourlyPay>
          <WageFlagStyle>{wageIncreaseText}</WageFlagStyle>
        </WageContainer>
        <Container>
          <Image src={clockIcon} alt="clock_icon" />
          <InfoStyle>{duration}</InfoStyle>
        </Container>
        <Container>
          <Image src={locationIcon} alt="location_icon" />
          <InfoStyle>{address}</InfoStyle>
        </Container>
        <DescriptionStyle>{shopDescription}</DescriptionStyle>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Wage = styled.span`
  ${body1Regular}
  color: var(--The-julge-purple-40, #905CB9);
`;

const HourlyPay = styled.span`
  ${h1Regular}
`;

const WageFlagStyle = styled.div`
  display: flex;
  height: 36px;
  padding: 12px;
  align-items: center;
  gap: 6px;
  width: 110px;

  color: var(--The-julge-gray-00, #ffffff);
  border-radius: 20px;
  background: var(--The-julge-purple-40, #905cb9);
  ${body2Regular}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const WageContainer = styled(Container)`
  gap: 8px;
`;

const InfoStyle = styled.span`
  color: var(--The-julge-gray-50, #7d7986);
  ${body2Regular}
`;

const DescriptionStyle = styled.span`
  ${body2Regular}
`;
