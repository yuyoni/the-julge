export interface InputProps extends InputContentProps {
  label: string;
  type?: string;
  placeholder?: string;
  inputSize?: number;
}

export interface InputContentProps {
  includeText?: string;
  includeImage?: boolean;
}
