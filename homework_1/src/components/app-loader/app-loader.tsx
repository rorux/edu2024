export const AppLoader = ({
  size = 4,
  border = 2,
}: {
  size?: number;
  border?: number;
}): React.ReactElement => {
  return (
    <div
      className={`inline-block h-${size} w-${size} animate-spin rounded-full border-${border} border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
    ></div>
  );
};
