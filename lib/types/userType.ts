export type UserType = "employee" | "employer";

export interface UserItem {
  id: string;
  email: string;
  type: UserType;
}
