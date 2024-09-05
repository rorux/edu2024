import { Loader } from './loader.tsx';
import { BUTTON_STYLES } from './const.ts';
import { AppButtonProps } from './types.ts';

export const AppButton = ({
  variant,
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
      className={`w-full justify-center rounded-md ${BUTTON_STYLES[variant]} disabled:cursor-not-allowed py-3 px-4 font-semibold text-white uppercase shadow-lg disabled:shadow-sm transition duration-150 ease-in-out hover:shadow-xl`}
    >
      {loading && <Loader />}
      {children}
    </button>
  );
};
