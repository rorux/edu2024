import { useState } from 'react';
import { EyeIcon, EyeSlashIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { AppInput } from '@components';

type PasswordInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export const PasswordInput = ({
  value,
  onChange,
  error,
}: PasswordInputProps): React.ReactElement => {
  const [type, setType] = useState<'password' | 'text'>('password');

  const Eye = type === 'password' ? EyeSlashIcon : EyeIcon;

  const toggleEye = () => {
    setType(type === 'password' ? 'text' : 'password');
  };

  return (
    <AppInput
      id="password"
      type={type}
      label="Пароль"
      startAdornment={<LockClosedIcon className="size-5 text-gray-400" />}
      endAdornment={
        <span onClick={toggleEye}>
          <Eye className="size-5 text-gray-400 hover:text-gray-500 cursor-pointer" />
        </span>
      }
      onChange={onChange}
      value={value}
      error={error}
    />
  );
};
