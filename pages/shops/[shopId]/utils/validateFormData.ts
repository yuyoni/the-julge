import { ShowToastType } from "@/contexts/ToastContext";
import TOAST_MESSAGES from "@/lib/constants/toastMessage";
import { FormDataType } from "@/lib/types/FormDataType";

export default function validateFormData(
  formData: FormDataType,
  showToast: ShowToastType,
  minimumWage: number,
) {
  const { hourlyPay, startsAt, workhour, description } = formData;
  const currentDateTime = new Date();

  if (!hourlyPay || startsAt.trim() === "" || !workhour) {
    showToast(TOAST_MESSAGES.ALL_FIELDS_REQUIRED);
    return false;
  }

  if (description.length >= 150) {
    showToast(TOAST_MESSAGES.DESCRIPTION_LIMIT);
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

  if (hourlyPay <= minimumWage) {
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
