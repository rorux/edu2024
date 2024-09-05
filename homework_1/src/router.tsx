import { Route, Routes } from 'react-router-dom';
import { MainPage, LoginPage } from '@pages';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
