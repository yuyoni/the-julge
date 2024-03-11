export type InputProps = {
  label: string;
  type?: string;
  name: string;
  value: string | number;
  onChange: () => void;
  errorMessage?: string;
};
