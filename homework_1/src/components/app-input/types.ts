export type AppInputProps = {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
  error?: string;
};
