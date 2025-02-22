import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

const UserRegisterFormContext = createContext(null);

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

  const handleChange = (name: string, value) => {
    setUserFormRequest({ ...userFormRequest, [name]: value });
  };

  return (
    <UserRegisterFormContext.Provider
      value={{
        userFormRequest: userFormRequest,
        setUserFormRequest: setUserFormRequest,
        handleChange: handleChange,
      }}
    >
      {children}
    </UserRegisterFormContext.Provider>
  );
}

export const useCreateUserContext = () => {
  return useContext(UserRegisterFormContext);
};
