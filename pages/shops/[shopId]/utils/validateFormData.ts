import { ShowToastType } from "@/contexts/ToastContext";
import TOAST_MESSAGES from "@/lib/constants/toastMessage";
import { FormDataType } from "@/lib/types/FormDataType";

export default function validateFormData(
  formData: FormDataType,
  showToast: ShowToastType,
) {
  const { hourlyPay, startsAt, workhour, description } = formData;
  const currentDateTime = new Date();

  if (new Date(startsAt) < currentDateTime) {
    showToast(TOAST_MESSAGES.OUTDATED);
    return false;
  }
  if (
    Number.isInteger(hourlyPay) ||
    Number.isInteger(workhour) ||
    isNaN(hourlyPay) ||
    isNaN(workhour)
  ) {
    showToast(TOAST_MESSAGES.HOURLY_WAGE_AND_WORKING_HOURS_NUMBER);
    return false;
  }
  if (hourlyPay < 9860) {
    showToast(TOAST_MESSAGES.MINIMUM_WAGE);
    return false;
  }
  if (workhour <= 0) {
    showToast(TOAST_MESSAGES.INVALID_WORKHOUR);
    return false;
  }
  if (hourlyPay <= 0 || startsAt.trim() === "" || description.trim() === "") {
    showToast(TOAST_MESSAGES.ALL_FIELDS_REQUIRED);
    return false;
  }

  return true;
}
