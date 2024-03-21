import tooltipIcon from "@/public/images/tooltip-icon.svg";
import { body1Regular } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import FormContainer from "./FormContainer";
import Tooltip from "./Tooltip";

interface PostFormProps {
  handleInputChange: (key: string, value: string) => void;
}

export default function PostForm({ handleInputChange }: PostFormProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <Wrapper>
      <TooltipIcon
        src={tooltipIcon}
        alt="tooltip_icon"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      />
      <Tooltip
        visible={isTooltipVisible}
        message="기존 시급과 같거나 상향된 금액을 입력하세요"
      />
      <FormContainer
        label="시급*"
        gridArea="hourlyPay"
        inputProps={{
          placeholder: "15000",
          unit: "원",
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            handleInputChange("hourlyPay", event.target.value),
        }}
      />
      <FormContainer
        label="시작 일시*"
        gridArea="startsAt"
        inputProps={{
          type: "datetime-local",
          placeholder: "2023-07-01 15:00",
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            handleInputChange("startsAt", event.target.value),
        }}
      />
      <FormContainer
        label="업무 시간*"
        gridArea="workhour"
        inputProps={{
          placeholder: "3",
          unit: "시간",
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            handleInputChange("workhour", event.target.value),
        }}
      />
      <FormContainer
        label="공고 설명"
        gridArea="description"
        inputProps={{
          placeholder: "공고 내용",
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            handleInputChange("description", event.target.value),
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  row-gap: 20px;
  column-gap: 24px;
  grid-template-areas:
    "hourlyPay startsAt workhour"
    "hourlyPay_input startsAt_input workhour_input"
    "description description description"
    "description_input description_input description_input";
  ${body1Regular}

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-areas:
      "hourlyPay startsAt"
      "hourlyPay_input startsAt_input"
      "workhour ."
      "workhour_input ."
      "description description"
      "description_input description_input";
  }

  @media only screen and (min-width: 375px) and (max-width: 767px) {
    grid-template-areas:
      "hourlyPay"
      "hourlyPay_input"
      "startsAt"
      "startsAt_input"
      "workhour"
      "workhour_input"
      "description"
      "description_input";
  }
`;

const TooltipIcon = styled(Image)`
  position: absolute;
  top: 3px;
  left: 38px;
  cursor: pointer;
  z-index: 1;
`;
