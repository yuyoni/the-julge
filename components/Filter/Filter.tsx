import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../Button/Button";
import CloseButton from "../Button/CloseButton";
import LocationBadgeBox from "./LocationBadgeBox";
import LocationOption from "./LocationOption";
import {
  FilterProps,
  LocationString,
  SelectedLocationList,
} from "./types/types";

export default function Filter({
  isModalVisible,
  handleToggleModal,
  onApplyFilter,
}: FilterProps) {
  const [selectedLocations, setSelectedLocations] =
    useState<SelectedLocationList>([]);
  const [startsAtValue, setStartsAtValue] = useState<string>("");
  const [hourlyPayValue, setHourlyPayValue] = useState<string>("");

  const toggleLocation = (location: LocationString) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(
        selectedLocations.filter((item) => item !== location)
      );
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const clearFilters = () => {
    setSelectedLocations([]);
    setStartsAtValue("");
    setHourlyPayValue("");
    onApplyFilter([], "", "");
  };

  return (
    isModalVisible && (
      <Wrapper>
        <Header>
          <Title>상세 필터</Title>
          <CloseButton handleClick={handleToggleModal} />
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
          className="calendar_input"
          type="datetime-local"
          max="9999-12-31T23:59"
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
          <Button
            text="초기화"
            handleClick={clearFilters}
            color="white"
            width={82}
          />
          <Button
            text="적용하기"
            handleClick={() => {
              onApplyFilter(selectedLocations, startsAtValue, hourlyPayValue);
              handleToggleModal();
            }}
            color="colored"
            width={260}
          />
        </ButtonContainer>
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 5;

  width: 390px;
  padding: 24px 20px;
  flex-direction: column;
  gap: 24px;

  border-radius: 10px;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  background: var(--The-julge-white, #fff);
  box-shadow: 0px 2px 8px 0px rgba(120, 116, 134, 0.25);

  .calendar_input {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }

    &::-webkit-calendar-picker-indicator:hover {
      transform: scale(1.2);
    }

    &::-webkit-calendar-picker-indicator:active {
      transform: scale(1);
    }
  }
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

  background: var(--The-julge-gray-10);
`;

// Input 공통 컴포넌트로 변경예정
const Input = styled.input`
  display: flex;
  padding: 16px 20px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  border-radius: 6px;
  border: 1px solid var(--The-julge-gray-30);
  background: var(--The-julge-gray-00);
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  margin-top: 16px;
`;
