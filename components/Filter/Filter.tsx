import closeIcon from "@/public/images/close_icon.svg";
import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../Button/Button";
import ImageButton from "../Button/ImageButton";
import LocationBadgeBox from "./LocationBadgeBox";
import LocationOption from "./LocationOption";
import {
  FilterProps,
  LocationString,
  SelectedLocationList,
} from "./types/types";

export default function Filter({
  isModalVisible,
  handleModalClose,
}: FilterProps) {
  const [selectedLocations, setSelectedLocations] =
    useState<SelectedLocationList>([]);
  const [startsAtValue, setStartsAtValue] = useState<string>("");
  const [hourlyPayValue, setHourlyPayValue] = useState<string>("");

  const toggleLocation = (location: LocationString) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(
        selectedLocations.filter((item) => item !== location),
      );
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const clearFilters = () => {
    setSelectedLocations([]);
    setStartsAtValue("");
    setHourlyPayValue("");
  };

  return (
    isModalVisible && (
      <Wrapper>
        <Header>
          <Title>상세 필터</Title>
          <ImageButton
            src={closeIcon}
            alt="close_icon"
            handleClick={handleModalClose}
          />
        </Header>
        <Subtitle>위치</Subtitle>
        <LocationOption
          selectedLocations={selectedLocations}
          toggleLocation={toggleLocation}
        />
        <LocationBadgeBox
          selectedLocations={selectedLocations}
          toggleLocation={toggleLocation}
        />
        <BorderLine />
        <Subtitle>시작일</Subtitle>
        <Input
          type="text"
          placeholder="입력"
          value={startsAtValue}
          onChange={(e) => setStartsAtValue(e.target.value)}
        />
        <BorderLine />
        <Subtitle>금액</Subtitle>
        <Input
          type="text"
          placeholder="입력"
          value={hourlyPayValue}
          onChange={(e) => setHourlyPayValue(e.target.value)}
        />
        <ButtonContainer>
          <ButtonWrapper $width={82}>
            <Button text="초기화" handleClick={clearFilters} color="white" />
          </ButtonWrapper>
          <ButtonWrapper $width={260}>
            <Button
              text="적용하기"
              handleClick={() => {
                console.log("적용하기");
              }}
              color="colored"
            />
          </ButtonWrapper>
        </ButtonContainer>
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  // 필터 위치에 따라 top, right 등 속성 조절 필요
  z-index: 999;

  width: 390px;
  padding: 24px 20px;
  flex-direction: column;
  gap: 24px;

  border-radius: 10px;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  background: var(--The-julge-white, #fff);
  box-shadow: 0px 2px 8px 0px rgba(120, 116, 134, 0.25);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 20px;
`;

const Subtitle = styled.span`
  font-size: 16px;
`;

const BorderLine = styled.div`
  width: 100%;
  height: 2px;
  align-self: stretch;

  background: var(--The-julge-gray-10, #f2f2f3);
`;

// Input 공통 컴포넌트로 변경예정
const Input = styled.input`
  display: flex;
  padding: 16px 20px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  border-radius: 6px;
  border: 1px solid var(--The-julge-gray-30, #cbc9cf);
  background: var(--The-julge-white, #fff);
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  margin-top: 16px;
`;

const ButtonWrapper = styled.div<{ $width: number }>`
  width: ${({ $width }) => `${$width}px`};
`;
