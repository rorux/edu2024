import { AppButtonProps } from './types.ts';

export const AppButton = ({ label, onClick }: AppButtonProps): React.ReactElement => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full justify-center rounded-md bg-sky-600 py-3 px-4 font-semibold text-white uppercase shadow-lg transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-xl"
    >
      {label}
    </button>
  );
};
