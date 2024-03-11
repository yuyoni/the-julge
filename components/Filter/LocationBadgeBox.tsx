import closeIcon from "@/public/images/purple_close_icon.svg";
import styled from "@emotion/styled";
import Image from "next/image";

export default function LocationBadgeBox({
  selectedLocations,
  toggleLocation,
}: LocationBadgeBoxProps) {
  return (
    <Wrapper>
      {selectedLocations.map((location) => (
        <LocationBadge key={location} onClick={() => toggleLocation(location)}>
          <span>{location}</span>
          <Image src={closeIcon} alt="exit" style={{ cursor: "pointer" }} />
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

const LocationBadge = styled.button`
  display: flex;
  height: 30px;
  padding: 6px 10px;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  font-size: 14px;

  border-radius: 20px;
  background: var(--The-julge-purple-10, #e9dcf4);
  color: var(--The-jungle-purple-40, #905cb9);
`;
