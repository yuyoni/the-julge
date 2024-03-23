import { EMPTY_INPUT } from "@/lib/constants/errorMessage";

type EditFormData = {
  name: string;
  phone: string;
  address: string;
  bio: string;
};

export function validateProfileData(formData: EditFormData) {
  const { name, phone } = formData;
  if (name.length == 0 || phone.length == 0) {
    throw new TypeError(EMPTY_INPUT);
  }
}
