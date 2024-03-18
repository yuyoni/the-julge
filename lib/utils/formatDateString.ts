import { FormDataType } from "../types/FormDataType";

export default function convertToISODate(inputObject: FormDataType) {
  const isoDate = new Date(inputObject.startsAt).toISOString();
  return {
    ...inputObject,
    startsAt: isoDate,
  };
}
