import { AppButtonProps } from './types.ts';

export const AppButton = ({
  label,
  type,
  onClick,
  disabled,
}: AppButtonProps): React.ReactElement => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full justify-center rounded-md bg-sky-600 disabled:bg-slate-300 py-3 px-4 font-semibold text-white uppercase shadow-lg disabled:shadow-sm transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-xl"
    >
      {label}
    </button>
  );
};
