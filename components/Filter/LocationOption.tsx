import styled from "@emotion/styled";
import LOCATIONS from "./constants/constants";
import { LocationOptionProps } from "./types/type";

export default function LocationOption({
  selectedLocations,
  toggleLocation,
}: LocationOptionProps) {
  return (
    <Wrapper>
      {LOCATIONS.map((location) => (
        <Container
          key={location}
          onClick={() => toggleLocation(location)}
          $isSelected={selectedLocations.includes(location)}
        >
          {location}
        </Container>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
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

const Container = styled.div<{ $isSelected: boolean }>`
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
