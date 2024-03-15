export interface FormContainerProps {
  label: string;
  tooltipMessage?: string;
  gridArea: string;
  inputProps?: any;
}

export interface InputComponentProps {
  placeholder: string;
  gridArea: string;
  onChange: () => void;
  unit?: string;
  type?: string;
}
