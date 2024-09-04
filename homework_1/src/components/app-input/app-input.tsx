import { AppInputProps } from './types.ts';

export const AppInput = ({
  id,
  type,
  label,
  startAdornment,
  endAdornment,
  value,
  onChange,
  error,
}: AppInputProps): JSX.Element => {
  const paddingLeft = startAdornment ? 'pl-10' : 'pl-3';
  const paddingRight = endAdornment ? 'pr-10' : 'pr-3';
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        {startAdornment && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">{startAdornment}</div>
        )}
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={event => onChange?.(event)}
          className={`w-full rounded-md py-3 ${paddingLeft} ${paddingRight} text-md border border-gray-150 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400`}
        />
        {endAdornment && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">{endAdornment}</div>
        )}
        {error && <p className="absolute text-red-500 text-sm mt-0 sm:mt-1">{error}</p>}
      </div>
    </div>
  );
};
