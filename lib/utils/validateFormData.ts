import { SigninFormData } from "@/pages/signin/types/types";
import { SignupFormData } from "@/pages/signup/types/types";
import {
  PASSWORD_NOT_MATCHING,
  WRONG_INFORMATION,
} from "../constants/errorMessage";

export function validateSigninData(formData: SigninFormData) {
  const { email, password } = formData;
  if (email.length == 0 || password.length == 0) {
    return false;
  }
  return true;
}

// TODO: 커스텀 에러 만들기
export function validateSignupData(formData: SignupFormData) {
  const { email, password, passwordCheck } = formData;
  if (email.length == 0 || password.length == 0 || passwordCheck.length == 0) {
    throw new TypeError(WRONG_INFORMATION);
  }
  if (password !== passwordCheck) {
    throw new ReferenceError(PASSWORD_NOT_MATCHING);
  }
  return true;
}
