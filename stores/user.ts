import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

export type SessionStatus = 'Success' | 'Logout' | 'Failure' | 'No-Login';

export const userCodeAtom = atomWithStorage<number>('userCode', 0);
export const statusSessionAtom = atom<SessionStatus>('No-Login');
