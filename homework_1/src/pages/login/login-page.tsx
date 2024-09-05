import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseLayout } from '@layouts';
import { AuthForm } from '@features';

const TITLE = 'Авторизация';

export const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authorized = !!localStorage.getItem('isAuthorized');
    if (authorized) navigate('/');
  }, []);

  return (
    <BaseLayout title={TITLE}>
      <AuthForm />
    </BaseLayout>
  );
};
