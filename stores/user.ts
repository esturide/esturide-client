import { atomWithStorage } from 'jotai/utils';

export const userCodeAtom = atomWithStorage<number>('userCode', 0);
