import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { AppButton, AppInput } from '@components';

const FORM_TITLE = 'Авторизация';

export const AuthForm = (): React.ReactElement => {
  return (
    <>
      <div className="mx-auto max-w-md">
        <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:mt-6 sm:text-3xl">{FORM_TITLE}</h2>
      </div>
      <div className="mx-auto mt-6 w-full max-w-md rounded-lg bg-white/80 p-6 shadow-xl backdrop-blur-xl sm:mt-10 sm:p-10">
        <form className="space-y-6 lg:space-y-10">
          <AppInput
            id="email"
            type="email"
            label="Email"
            icon={<EnvelopeIcon className="size-5 text-gray-400" />}
          />
          <AppInput
            id="password"
            type="password"
            label="Пароль"
            icon={<LockClosedIcon className="size-5 text-gray-400" />}
          />
          <AppButton label="Отправить" />
        </form>
      </div>
    </>
  );
};
