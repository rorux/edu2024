import * as Yup from 'yup';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { AppButton, AppInput } from '@components';
import { AuthFormValidationSchema } from './validation-schema.ts';
import { PasswordInput } from './password-input.tsx';
import { TAuthForm } from './types.ts';

const FORM_TITLE = 'Авторизация';

export const AuthForm = (): React.ReactElement => {
  const { handleSubmit, control, formState, reset } = useForm<TAuthForm>({
    resolver: yupResolver(AuthFormValidationSchema(Yup)),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TAuthForm> = async values => {
    console.log(values);
    reset();
  };

  return (
    <>
      <div className="mx-auto max-w-md">
        <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:mt-6 sm:text-3xl">{FORM_TITLE}</h2>
      </div>
      <div className="mx-auto w-full max-w-md rounded-lg bg-white/80 shadow-xl backdrop-blur-xl mt-6 p-6 sm:mt-10 sm:p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 lg:space-y-10">
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AppInput
                id="email"
                type="text"
                label="Email"
                startAdornment={<EnvelopeIcon className="size-5 text-gray-400" />}
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
              <PasswordInput onChange={onChange} value={value} error={error?.message} />
            )}
          />
          <AppButton
            label="Отправить"
            type="submit"
            disabled={!formState.isDirty || !formState.isValid}
          />
        </form>
      </div>
    </>
  );
};
