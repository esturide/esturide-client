import React, { createContext, PropsWithChildren, useState } from 'react';

export const UserRegisterFormContext = createContext(null);

export interface CreateUserRequest {
  code: number;
  name: string;
  firstLastName: string;
  secondLastName: string;
  curp: string;
  birthDate: Date;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
}

export default function RegisterFormContext({ children }: PropsWithChildren) {
  const [userFormRequest, setUserFormRequest] = useState<CreateUserRequest>({
    code: 100000000,
    name: '',
    firstLastName: '',
    secondLastName: '',
    curp: '',
    birthDate: new Date(),
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
  });

  return (
    <UserRegisterFormContext.Provider
      value={{
        userFormRequest: userFormRequest,
        setUserFormRequest: setUserFormRequest,
      }}
    >
      {children}
    </UserRegisterFormContext.Provider>
  );
}
