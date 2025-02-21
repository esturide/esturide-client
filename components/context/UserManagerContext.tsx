import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import RequestProfile, { UserType } from '@const/RequestProfile';
import { useAtom } from 'jotai/index';
import { userCodeAtom } from '@stores/user';
import { authTokenAtom } from '@stores/token';
import { requestProfile } from '@libs/request/requestProfile';
import { router } from 'expo-router';

export type SessionStatus = 'Success' | 'Logout' | 'Failure' | 'No-Login';

const UserManagerContext = createContext(null);

const emptyProfile: RequestProfile = {
  userCode: 0,
  firstName: '',
  maternalSurname: '',
  paternalSurname: '',
  email: '',
  role: 'Not-Verified',
};

export default function UserManagerContextProvider({
  children,
}: PropsWithChildren) {
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>('No-Login');
  const [onTraveling, setOnTraveling] = useState(false);
  const [userType, setUserType] = useState<UserType>('Not-Verified');
  const [userProfile, setUserProfile] = useState<RequestProfile>(emptyProfile);

  const [userCode, setUserCode] = useAtom(userCodeAtom);
  const [authToken, setAuthToken] = useAtom(authTokenAtom);

  useEffect(() => {
    const loadProfile = async () => {
      if (sessionStatus === 'Success') {
        const statusProfile = await requestProfile(setUserProfile);

        console.log(`User code is: ${userCode}`);
        console.log(`Auth token is: ${authToken}`);

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
    console.log(`User profile: `, userProfile);
    setUserType(userProfile.role);
  }, [userProfile]);

  useEffect(() => {
    console.log(`User type is set in: ${userType}`);
  }, [userProfile]);

  useEffect(() => {
    console.log(`Session status: ${sessionStatus}`);

    if (sessionStatus === 'Logout') {
      router.replace('/');
      setUserProfile(emptyProfile);
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

        sessionStatus: sessionStatus,
        setSessionStatus: setSessionStatus,
      }}
    >
      {children}
    </UserManagerContext.Provider>
  );
}

export const useUserManagerContext = () => {
  return useContext(UserManagerContext);
};
