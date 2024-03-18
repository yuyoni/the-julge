export interface InputProps extends InputContentProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  inputSize?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputContentProps {
  includeText?: string;
  includeImage?: boolean;
  handleClick?: () => void;
  onClick?: () => void;
}
