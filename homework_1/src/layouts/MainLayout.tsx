import { PropsWithChildren } from 'react';

export const MainLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  return <main className="min-h-screen flex flex-col p-12">{children}</main>;
};
