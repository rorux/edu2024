type AppButtonProps = {
  label: string;
};

export const AppButton = ({ label }: AppButtonProps): React.ReactElement => {
  return (
    <button className="w-full justify-center rounded-md bg-sky-600 py-3 px-4 font-semibold text-white uppercase shadow-lg transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-xl">
      {label}
    </button>
  );
};
