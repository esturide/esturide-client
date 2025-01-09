import axios, { AxiosResponse } from 'axios';
import { clientUserManagementSystem, config } from '@const/apiRequest';
import RequestProfile from '@const/RequestProfile';

export const requestProfile = async (
  username: string | number,
  setProfile: (date: RequestProfile) => void,
) => {
  try {
    const response: AxiosResponse = await clientUserManagementSystem.post(
      `/user/${username}`,
      {},
      config,
    );

    const data = response.data;
    const dataProfile: RequestProfile = {
      firstName: data.firstName,
      maternalSurname: data.maternalSurname,
      paternalSurname: data.paternalSurname,
      email: data.email,
      role: data.role,
    };

    setProfile(dataProfile);

    return response.status === 200;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return false;
    }
  }

  return false;
};
