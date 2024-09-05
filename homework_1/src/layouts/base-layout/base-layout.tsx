import { PropsWithChildren } from 'react';

export const BaseLayout = ({
  children,
  title,
}: { title: string } & PropsWithChildren): React.ReactElement => {
  return (
    <main className="min-h-screen flex flex-col p-12">
      <div className="mx-auto max-w-md">
        <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-3xl">{title}</h2>
      </div>
      {children}
    </main>
  );
};
