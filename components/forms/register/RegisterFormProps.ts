export type RegistrationUserFormProps = {
  onSubmit?: (
    name: string,
    firstLastName: string,
    secondLastName: string,
    code: string,
    birthDate: Date,
  ) => Promise<boolean>;
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
