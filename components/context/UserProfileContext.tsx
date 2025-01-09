import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import RequestProfile from '@const/RequestProfile';
import { requestProfile } from '@libs/request/requestProfile';
import { useAtom } from 'jotai/index';
import { userCodeAtom } from '@stores/user';
import Loading from '@components/visuals/resources/Loading';
import loaderEffect from '@libs/loaderEffect';
import { router } from 'expo-router';

export const UserProfileContext = createContext(null);

export default function UserContext({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState<RequestProfile | null>(null);
  const [userCode, setUserCode] = useAtom(userCodeAtom);

  useEffect(() => {
    const requestDateProfile = async () => {
      await loaderEffect(async () => {
        const status = await requestProfile(userCode, setUserProfile);

        if (!status) {
          router.replace('/');
        }
      }, setLoading);
    };

    requestDateProfile();
  }, []);

  return (
    <UserProfileContext.Provider value={userProfile}>
      {children}
      <Loading visible={loading} />
    </UserProfileContext.Provider>
  );
}
