import { ComponentPropsWithoutRef, ReactElement } from 'react';
import { Loader } from './loader.tsx';

export const AppButton = ({
  type,
  onClick,
  disabled,
  children,
  loading,
}: ComponentPropsWithoutRef<'button'> & { loading?: boolean }): ReactElement => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full justify-center rounded-md bg-sky-600 disabled:bg-sky-300 disabled:cursor-not-allowed py-3 px-4 font-semibold text-white uppercase shadow-lg disabled:shadow-sm transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-xl"
    >
      {loading && <Loader />}
      {children}
    </button>
  );
};
