export interface InputProps extends InputContentProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  error?: string;
}

export interface InputContentProps {
  includeText?: string;
  includeImage?: boolean;
  handleClick?: () => void;
  onClick?: () => void;
}
