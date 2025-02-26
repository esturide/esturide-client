import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import RequestProfile, { UserType } from '@const/RequestProfile';
import { useAtom, useSetAtom } from 'jotai';
import { statusSessionAtom, userCodeAtom } from '@stores/user';
import { authTokenAtom } from '@stores/token';
import { requestProfile } from '@libs/request/requestProfile';
import { router } from 'expo-router';
import { requestValidationToken } from '@libs/request/requestValidationToken';

const UserManagerContext = createContext<any | null>(null);

const EmptyProfile: RequestProfile = {
  userCode: 0,
  firstName: '',
  maternalSurname: '',
  paternalSurname: '',
  email: '',
  role: 'Not-Verified',
};

const defaultTimeRefresh = 3300000;

export default function UserManagerContextProvider({
  children,
}: PropsWithChildren) {
  const [onTraveling, setOnTraveling] = useState(false);
  const [userType, setUserType] = useState<UserType>('Not-Verified');
  const [userProfile, setUserProfile] = useState<RequestProfile>(EmptyProfile);
  const [authToken, setAuthToken] = useAtom(authTokenAtom);
  const [sessionStatus, setSessionStatus] = useAtom(statusSessionAtom);
  const setUserCode = useSetAtom(userCodeAtom);

  useEffect(() => {
    const checkToken = async () => {
      if (sessionStatus === 'Success') {
        const status = await requestValidationToken();

        if (!status) {
          setSessionStatus('Logout');
        }
      }
    };

    const interval = setInterval(checkToken, defaultTimeRefresh);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loadProfile = async () => {
      if (sessionStatus === 'Success') {
        const statusProfile = await requestProfile(setUserProfile);

        if (statusProfile) {
          setSessionStatus('Success');
        } else {
          setSessionStatus('Failure');
        }
      }
    };

    loadProfile();
  }, [sessionStatus, authToken]);

  useEffect(() => {
    setUserType(userProfile.role);
  }, [userProfile]);

  useEffect(() => {
    if (sessionStatus === 'Logout') {
      router.replace('/');
      setUserProfile(EmptyProfile);
      setUserCode(0);
      setAuthToken('');
    }
  }, [sessionStatus]);

  return (
    <UserManagerContext.Provider
      value={{
        userProfile: userProfile,

        userType: userType,
        setUserType: setUserType,

        onTraveling: onTraveling,
        setOnTraveling: setOnTraveling,
      }}
    >
      {children}
    </UserManagerContext.Provider>
  );
}

export const useUserManagerContext = () => {
  return useContext(UserManagerContext);
};
