import { ComponentPropsWithoutRef } from 'react';

export type AppButtonProps = {
  variant: 'info' | 'success';
  size: 'medium' | 'small';
  loading?: boolean;
} & ComponentPropsWithoutRef<'button'>;
