import { ComponentPropsWithoutRef, ReactElement } from 'react';

export const AppButton = ({
  type,
  onClick,
  disabled,
  children,
}: ComponentPropsWithoutRef<'button'>): ReactElement => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full justify-center rounded-md bg-sky-600 disabled:bg-slate-300 py-3 px-4 font-semibold text-white uppercase shadow-lg disabled:shadow-sm transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-xl"
    >
      {children}
    </button>
  );
};
