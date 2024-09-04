import * as Yup from 'yup';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { AppButton, AppInput } from '@components';
import { TAuthForm } from './types.ts';
import { AuthFormValidationSchema } from './validation-schema.ts';

const FORM_TITLE = 'Авторизация';

export const AuthForm = (): React.ReactElement => {
  const { handleSubmit, control } = useForm<TAuthForm>({
    resolver: yupResolver(AuthFormValidationSchema(Yup)),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<TAuthForm> = async values => {
    console.log(values);
  };

  return (
    <>
      <div className="mx-auto max-w-md">
        <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:mt-6 sm:text-3xl">{FORM_TITLE}</h2>
      </div>
      <div className="mx-auto mt-6 w-full max-w-md rounded-lg bg-white/80 p-6 shadow-xl backdrop-blur-xl sm:mt-10 sm:p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:space-y-10">
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AppInput
                id="email"
                type="email"
                label="Email"
                icon={<EnvelopeIcon className="size-5 text-gray-400" />}
                onChange={onChange}
                value={value}
                error={error?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AppInput
                id="password"
                type="password"
                label="Пароль"
                icon={<LockClosedIcon className="size-5 text-gray-400" />}
                onChange={onChange}
                value={value}
                error={error?.message}
              />
            )}
          />
          <AppButton label="Отправить" type="submit" />
        </form>
      </div>
    </>
  );
};
