import { TypeAccount } from '@components/forms/register/TypeAccountForm';
import { atom } from 'jotai';

export const addressAtom = atom('');
export const phoneNumberAtom = atom('');
export const emailAtom = atom('');
export const passwordAtom = atom('');
export const confirmPasswordAtom = atom('');

export const selectedOptionAtom = atom<TypeAccount>('unknown');
export const isSelectedAtom = atom(false);

export const nameAtom = atom<string>('');
export const firstLastNameAtom = atom<string>('');
export const secondLastNameAtom = atom<string>('');
export const codeAtom = atom<string>('');
export const birthDateAtom = atom<Date | null>(null);

export const brandAtom = atom<string>('');
export const modelAtom = atom<string>('');
export const yearAtom = atom<string>('');
export const platesAtom = atom<string>('');
export const colorAtom = atom<string>('');