import { FormDataType } from "../types/types";

export default function convertToISODate(inputObject: FormDataType) {
  const isoDate = new Date(inputObject.startsAt).toISOString();
  return {
    ...inputObject,
    startsAt: isoDate,
  };
}
