import { TAuthForm } from '../features/auth-form/types.ts';

export const logIn = (payload: TAuthForm): Promise<string> =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(payload);
      resolve('ОК');
    }, 1500);
  });
