import { ComponentPropsWithoutRef } from 'react';

export type AppButtonProps = {
  variant: 'info' | 'success';
  loading?: boolean;
} & ComponentPropsWithoutRef<'button'>;
