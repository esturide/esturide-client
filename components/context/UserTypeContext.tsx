import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

export type UserType = 'driver' | 'passenger';

const UserTypeContext = createContext(null);

export default function UserTypeContextProvider({
  children,
}: PropsWithChildren) {
  const [userType, setUserType] = useState<UserType>('passenger');
  const [onTraveling, setOnTraveling] = useState(false);

  return (
    <UserTypeContext.Provider
      value={{
        userType: userType,
        setUserType: setUserType,
        onTraveling: onTraveling,
        setOnTraveling: setOnTraveling,
      }}
    >
      {children}
    </UserTypeContext.Provider>
  );
}

export const useUserTypeContext = () => {
  return useContext(UserTypeContext);
};
