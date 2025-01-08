import { atomWithStorage } from 'jotai/utils';
import { UserDataRequest } from '@libs/request/createUser';

export const userDataRequestAtom = atomWithStorage<UserDataRequest>(
  'userDataRequest',
  {},
);
