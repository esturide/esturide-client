import {Position} from "@const/Position";

export type UserType = 'Driver' | 'Passenger' | 'Not-Verified';

export interface UserDataLogin {
  readonly code: number;
  readonly password: string;
}

export default interface RequestProfile {
  readonly userCode: number;
  readonly firstName: string;
  readonly maternalSurname: string;
  readonly paternalSurname: string;
  readonly email: string;
  readonly role: UserType;
}

export const getFullName = (profile: RequestProfile) => {
  return `${profile.firstName} ${profile.paternalSurname} ${profile.maternalSurname}`;
};

export const getRoleFromRequest = (role: string): UserType => {
  if (role === 'driver') {
    return 'Driver';
  } else if (role === 'passenger') {
    return 'Passenger';
  }

  return 'Not-Verified';
};
