import { BaseLayout } from '@layouts';
import { Link } from 'react-router-dom';

const TITLE = 'Главная страница';

export const MainPage = () => {
  const isAuthorized = !!localStorage.getItem('isAuthorized');
  return (
    <BaseLayout title={TITLE}>
      {isAuthorized ? (
        <p className="text-green-500 text-center text-lg font-medium mt-6">Вы авторизованы</p>
      ) : (
        <>
          <p className="text-red-500 text-center text-lg font-medium mt-6">Вы не авторизованы</p>
          <p className="text-center mt-6">
            <Link
              to="/login"
              className="text-blue-600 dark:text-blue-500 underline hover:no-underline"
            >
              Перейти на страницу авторизации
            </Link>
          </p>
        </>
      )}
    </BaseLayout>
  );
};
