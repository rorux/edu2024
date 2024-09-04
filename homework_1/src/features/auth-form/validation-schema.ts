import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[A-ZА-ЯЁ]).{5,15}$/;

const messages = {
  VALID_EMAIL: 'Пожалуйста, введите корректный email',
  REQUIRED: 'Поле обязательно для заполнения',
  MIN_LENGTH: (length: number) => `Минимальное количество символов - ${length}`,
  MAX_LENGTH: (length: number) => `Максимальное количество символов - ${length}`,
  PASSWORD_RULES: 'Должен содержать цифру и заглавную букву',
};

export const AuthFormValidationSchema = (Yup: typeof yup) =>
  Yup.object().shape({
    email: Yup.string().email(messages.VALID_EMAIL).nullable().required(messages.REQUIRED),
    password: Yup.string()
      .min(5, messages.MIN_LENGTH(5))
      .max(15, messages.MAX_LENGTH(15))
      .matches(passwordRules, { message: messages.PASSWORD_RULES })
      .nullable()
      .required(messages.REQUIRED),
  });
