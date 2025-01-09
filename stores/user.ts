import { atomWithStorage } from 'jotai/utils';
import UserDataRequest from '@const/UserData';

export const userDataAtom = atomWithStorage<UserDataRequest>('userData', null);
