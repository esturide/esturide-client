import axios, { AxiosResponse } from 'axios';
import { clientUserManagement, config } from '@const/apiRequest';
import RequestProfile, { getRoleFromRequest } from '@const/RequestProfile';

export const requestProfile = async (
  setProfile: (date: RequestProfile) => void,
) => {
  try {
    const response: AxiosResponse = await clientUserManagement.post(
      `/user/profile`,
      new URLSearchParams(),
      config,
    );

    const data = response.data;

    setProfile({
      userCode: data.code,
      firstName: data.firstname,
      maternalSurname: data.maternal_surname,
      paternalSurname: data.paternal_surname,
      email: data.email,
      role: getRoleFromRequest(data.role),
    });

    return response.status === 200 || response.status === 201;
  } catch (e) {
    console.error(e);

    if (axios.isAxiosError(e)) {
      return false;
    }
  }

  return false;
};
