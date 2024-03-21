import { ShowToastType } from "@/contexts/ToastContext";
import TOAST_MESSAGES from "@/lib/constants/toastMessage";
import { FormDataType } from "@/lib/types/FormDataType";

export default function validateFormData(
  formData: FormDataType,
  showToast: ShowToastType,
) {
  const { hourlyPay, startsAt, workhour, description } = formData;
  const currentDateTime = new Date();
  const MINIMUM_WAGE = 9860;

  if (hourlyPay <= 0 || startsAt.trim() === "" || description.trim() === "") {
    showToast(TOAST_MESSAGES.ALL_FIELDS_REQUIRED);
    return false;
  }

  if (new Date(startsAt) < currentDateTime) {
    showToast(TOAST_MESSAGES.OUTDATED);
    return false;
  }

  if (workhour <= 0 || 8 < workhour) {
    showToast(TOAST_MESSAGES.INVALID_WORKHOUR);
    return false;
  }

  if (hourlyPay < MINIMUM_WAGE) {
    showToast(TOAST_MESSAGES.SUBMINIMUM_WAGE);
    return false;
  }

  if (isNaN(hourlyPay) || isNaN(workhour)) {
    showToast(TOAST_MESSAGES.HOURLY_WAGE_AND_WORKING_HOURS_NUMBER);
    return false;
  }

  if (
    !Number.isInteger(Number(hourlyPay)) ||
    !Number.isInteger(Number(workhour))
  ) {
    showToast(TOAST_MESSAGES.ONLY_INTEGAR);
    return false;
  }

  return true;
}
