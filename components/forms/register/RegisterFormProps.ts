export type RegistrationFormProps = {
  onSubmit?: (
    name: string,
    firstLastName: string,
    secondLastName: string,
    code: string,
    birthDate: Date,
  ) => Promise<boolean>;
  redirect: string;
};
