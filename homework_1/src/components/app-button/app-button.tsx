import { Loader } from './loader.tsx';
import { buttonStylesBySize, buttonStylesByVariant } from './const.ts';
import { AppButtonProps } from './types.ts';

export const AppButton = ({
  variant,
  size,
  loading,
  type,
  onClick,
  disabled,
  children,
}: AppButtonProps): React.ReactElement => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full justify-center rounded-md ${buttonStylesByVariant[variant]} disabled:cursor-not-allowed ${buttonStylesBySize[size]} font-semibold text-white uppercase shadow-lg disabled:shadow-sm transition duration-150 ease-in-out hover:shadow-xl`}
    >
      {loading && <Loader />}
      {children}
    </button>
  );
};
