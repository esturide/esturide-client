export type RegistrationUserFormProps = {
  onSubmit?: (
    name: string,
    firstLastName: string,
    secondLastName: string,
    code: number,
    birthDate: Date,
  ) => Promise<boolean>;
  redirect: string;
};

export type RegistrationAddressFormProps = {
  onSubmit?: (
    address: string,
    phoneNumber: string,
    email: string,
    password: string,
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
