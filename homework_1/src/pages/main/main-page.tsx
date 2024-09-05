import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseLayout } from '@layouts';
import { AppButton } from '@components';

const TITLE = 'Главная страница';

export const MainPage = () => {
  const [authorized, setAuthorized] = useState(!!localStorage.getItem('isAuthorized'));
  const navigate = useNavigate();

  const AuthButton = () => {
    return authorized ? (
      <AppButton
        variant="success"
        size="small"
        onClick={() => {
          localStorage.removeItem('isAuthorized');
          setAuthorized(false);
        }}
      >
        Выйти
      </AppButton>
    ) : (
      <AppButton variant="success" size="small" onClick={() => navigate('/login')}>
        Войти
      </AppButton>
    );
  };

  return (
    <BaseLayout title={TITLE}>
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <AuthButton />
      </div>
      {authorized ? (
        <p className="text-green-500 text-center text-lg font-medium mt-6">Вы авторизованы</p>
      ) : (
        <p className="text-red-500 text-center text-lg font-medium mt-6">Вы не авторизованы</p>
      )}
    </BaseLayout>
  );
};
