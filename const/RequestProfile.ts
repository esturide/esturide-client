export default interface RequestProfile {
  userCode: number;
  firstName: string;
  maternalSurname: string;
  paternalSurname: string;
  email: string;
  role: string;
}

export const getFullName = (profile: RequestProfile) => {
  return `${profile.firstName} ${profile.paternalSurname} ${profile.maternalSurname}`;
};
