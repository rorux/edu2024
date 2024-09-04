import { logIn } from '@api';
import { TAuthForm } from './types.ts';

export const sendAuthForm = async (payload: TAuthForm): Promise<string> => {
  const response = await logIn(payload);
  return response;
};
