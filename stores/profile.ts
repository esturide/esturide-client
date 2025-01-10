import { atomWithStorage } from 'jotai/utils';
import RequestProfile from '@const/RequestProfile';

export const authTokenAtom = atomWithStorage<RequestProfile>('authToken', null);
