export interface FormDataType {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
}

export interface RequestData<T> {
  "Content-Type": string;
  Authorization: string;
  body: T;
}
