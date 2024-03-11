import styled from "@emotion/styled";
import Image from "next/image";
import closeIcon from "@/public/images/close_icon.svg";
import LocationBadge from "./LocationBadge";
import Button from "../Button/Button";
import LOCATIONS from "./constants/constants";
import { useState } from "react";

export default function Filter({
  isModalVisible,
  handleModalClose,
}: {
  isModalVisible: boolean;
  handleModalClose: (isModalVisible: boolean) => void;
}) {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const toggleLocation = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(
        selectedLocations.filter((item) => item !== location),
      );
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  return (
    isModalVisible && (
      <Wrapper>
        <Header>
          <Title>상세 필터</Title>
          <Image
            src={closeIcon}
            alt="exit"
            onClick={() => {
              handleModalClose(false);
            }}
          />
        </Header>
        <Subtitle>위치</Subtitle>
        <Container>
          {LOCATIONS.map((location) => (
            <LocationOption
              key={location}
              onClick={() => toggleLocation(location)}
              $isSelected={selectedLocations.includes(location)}
            >
              {location}
            </LocationOption>
          ))}
        </Container>
        <BadgeContainer>
          {selectedLocations.map((location) => (
            <LocationBadge
              key={location}
              text={location}
              handleClick={toggleLocation}
            />
          ))}
        </BadgeContainer>
        <BorderLine />
        <Subtitle>시작일</Subtitle>
        <BadgeContainer />
        <Input type="text" placeholder="입력" />
        <BorderLine />
        <Subtitle>금액</Subtitle>
        <Input type="text" placeholder="입력" />
        <ButtonContainer>
          <ButtonWrapper $width={82}>
            <Button
              text="초기화"
              handleClick={() => {
                console.log("초기화");
              }}
              color="white"
            />
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

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 16px;
  overflow-y: scroll;
  border-radius: 6px;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  background: var(--The-julge-white, #fff);
  font-size: 14px;

  width: 350px;
  height: 258px;
`;

const LocationOption = styled.div<{ $isSelected: boolean }>`
  cursor: pointer;
  padding: 8px 8px;
  margin: 4px;
  font-size: 14px;
  text-align: center;
  border-radius: 16px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "var(--The-julge-purple-40)" : "transparent"};
  color: ${({ $isSelected }) =>
    $isSelected ? "var(--The-julge-gray-00)" : "var(--The-julge-black)"};
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px;
  gap: 8px;
`;

const BorderLine = styled.div`
  width: 100%;
  height: 2px;
  align-self: stretch;

  background: var(--The-julge-gray-10, #f2f2f3);
`;

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
