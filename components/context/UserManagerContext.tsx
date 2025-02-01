import {
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
    console.log(`User code is: ${userCode}`);

    const loadProfile = async () => {
      const statusProfile = await requestProfile(userCode, setUserProfile);

      if (statusProfile && authToken.length != 0) {
        setSessionStatus('Success');
      }

      setUserType(userProfile.role);
    };

    loadProfile();
  }, [userCode]);

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
