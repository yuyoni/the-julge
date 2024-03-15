export enum UserType {
  PART_TIME = "알바님",
  OWNER = "사장님",
}

export type SignupFormData = {
  email: string;
  password: string;
  passwordCheck: string;
};
