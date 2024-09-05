import { BaseLayout } from '@layouts';
import { AuthForm } from '@features';

const TITLE = 'Авторизация';

export const LoginPage = () => {
  return (
    <BaseLayout title={TITLE}>
      <AuthForm />
    </BaseLayout>
  );
};
