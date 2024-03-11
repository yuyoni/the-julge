type LocationString = string;
type SelectedLocationList = LocationString[];

interface FilterProps {
  isModalVisible: boolean;
  handleModalClose: () => void;
}

interface LocationOptionProps {
  selectedLocations: SelectedLocationList;
  toggleLocation: (location: LocationString) => void;
}

interface LocationBadgeBoxProps {
  selectedLocations: SelectedLocationList;
  toggleLocation: (location: LocationString) => void;
}
