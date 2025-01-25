import { createContext, PropsWithChildren, useContext, useState } from 'react';

export type UserType = 'driver' | 'passenger';

const UserTypeContext = createContext(null);

export default function UserTypeContextProvider({
  children,
}: PropsWithChildren) {
  const [userType, setUserType] = useState<UserType>('passenger');

  return (
    <UserTypeContext.Provider
      value={{
        userType: userType,
        setUserType: setUserType,
      }}
    >
      {children}
    </UserTypeContext.Provider>
  );
}

export const useUserTypeContext = () => {
  return useContext(UserTypeContext);
};
