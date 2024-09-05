import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage, LoginPage } from '@pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
