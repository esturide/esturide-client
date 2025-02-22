import { CreateUserRequest } from '@components/context/RegisterFormContext';

export type RegistrationUserFormProps = {
  onSubmit?: (form: CreateUserRequest) => Promise<boolean>;
  redirect: string;
};

export type RegistrationDriverFormProps = {
  onSubmit?: (
    brand: string,
    model: string,
    year: string,
    plates: string,
    color: string,
  ) => Promise<boolean>;
  redirect: string;
};
