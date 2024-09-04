import { AppInputProps } from './types.ts';

export const AppInput = ({
  id,
  type,
  label,
  icon,
  value,
  onChange,
}: AppInputProps): React.ReactElement => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">{icon}</div>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={event => onChange?.(event)}
          className="w-full rounded-md p-3 pl-10 text-md border border-gray-150 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
        />
      </div>
    </div>
  );
};
