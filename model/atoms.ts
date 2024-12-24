import { atom } from 'jotai';

interface UserProfile {
  firstname: string;
  lastname: string;
}

export const tokenAtom = atom<string>('');
export const userProfileAtom = atom<UserProfile>();
