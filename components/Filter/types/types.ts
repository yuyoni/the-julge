import { Dispatch, SetStateAction } from "react";

export type LocationString = string;
export type SelectedLocationList = LocationString[];

export interface FilterProps {
  isModalVisible: boolean;
  handleModalClose: () => void;
  onApplyFilter: (
    locations: SelectedLocationList,
    startsAt: string,
    hourlyPay: string,
  ) => void;
}

export interface LocationOptionProps {
  selectedLocations: SelectedLocationList;
  toggleLocation: (location: LocationString) => void;
}

export interface LocationBadgeBoxProps {
  selectedLocations: SelectedLocationList;
  toggleLocation: (location: LocationString) => void;
}
