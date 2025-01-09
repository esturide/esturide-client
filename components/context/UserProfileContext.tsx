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
import { stringToInteger } from '@libs/cast';

export const UserProfileContext = createContext<RequestProfile>(null);

export default function UserContext({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState<RequestProfile | null>(null);
  const [userCode, setUserCode] = useAtom(userCodeAtom);

  useEffect(() => {
    const requestDateProfile = async () => {
      await loaderEffect(async () => {
        const status = await requestProfile(
          stringToInteger(userCode),
          setUserProfile,
        );

        if (!status) {
          router.replace('/');
        }

        console.log(userProfile);
      }, setLoading);
    };

    requestDateProfile();
  }, []);

  return (
    <UserProfileContext.Provider value={userProfile}>
      {children}
      <Loading visible={loading} modal />
    </UserProfileContext.Provider>
  );
}
