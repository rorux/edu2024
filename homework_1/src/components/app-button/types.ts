export type AppButtonProps = {
  label: string;
  type: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
};
