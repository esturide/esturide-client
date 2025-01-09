import { atomWithStorage } from 'jotai/utils';
import { CreateUserRequest } from '@libs/request/createUser';

export const userDataRequestAtom = atomWithStorage<CreateUserRequest>(
  'userDataRequest',
  {},
);
