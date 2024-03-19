import { ShowToastType } from "@/contexts/ToastContext";
import TOAST_MESSAGES from "@/lib/constants/toastMessage";
import { FormDataType } from "@/lib/types/FormDataType";

export default function validateFormData(
  formData: FormDataType,
  showToast: ShowToastType,
) {
  const { hourlyPay, startsAt, workhour } = formData;
  if (hourlyPay <= 0 || startsAt.trim() === "" || workhour <= 0) {
    showToast(TOAST_MESSAGES.ALL_FIELDS_REQUIRED);
    return false;
  }
  if (isNaN(hourlyPay) || isNaN(workhour)) {
    showToast(TOAST_MESSAGES.HOURLY_WAGE_AND_WORKING_HOURS_NUMBER);
    return false;
  }
  if (hourlyPay < 9860) {
    showToast(TOAST_MESSAGES.MINIMUM_WAGE);
    return false;
  }
  return true;
}
