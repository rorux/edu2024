export type AppInputProps = {
  id: string;
  type: string;
  label: string;
  icon: JSX.Element;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
};
