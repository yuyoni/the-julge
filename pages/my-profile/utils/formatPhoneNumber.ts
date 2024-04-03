export default function formatPhoneNumber(phoneNumber: string) {
  const cleanedNumber = phoneNumber.replace("-", "");
  const match = cleanedNumber.match(/^(\d{3})(\d{4})(\d{4})$/);
  if (match) {
    return match[1] + "-" + match[2] + "-" + match[3];
  }

  return phoneNumber;
}
