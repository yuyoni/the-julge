import styled from "@emotion/styled";
import { LocationBadgeBoxProps } from "./types/types";
import CloseButton from "../Button/CloseButton";

export default function LocationBadgeBox({
  selectedLocations,
  toggleLocation,
}: LocationBadgeBoxProps) {
  return (
    <Wrapper>
      {selectedLocations.map((location) => (
        <LocationBadge key={location} onClick={() => toggleLocation(location)}>
          <span>{location}</span>
          <CloseButton size={16} color="#fff" />
        </LocationBadge>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px;
  gap: 8px;
`;

const LocationBadge = styled.div`
  display: flex;
  height: 30px;
  padding: 6px 10px;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  cursor: pointer;

  border-radius: 20px;
  background: var(--The-julge-green-10);
  color: var(--The-julge-gray-00);
`;
