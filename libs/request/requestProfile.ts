import axios, { AxiosResponse } from 'axios';
import { clientUserManagementSystem, config } from '@const/apiRequest';
import RequestProfile from '@const/RequestProfile';

export const requestProfile = async (
  code: string | number,
  setProfile: (date: RequestProfile) => void,
) => {
  try {
    const response: AxiosResponse = await clientUserManagementSystem.get(
      `/user/${code}`,
      {},
    );

    const data = response.data;

    setProfile({
      firstName: data.firstname,
      maternalSurname: data.maternal_surname,
      paternalSurname: data.paternal_surname,
      email: data.email,
      role: data.role,
    });

    return response.status === 200 || response.status === 201;
  } catch (e) {
    console.log(e);

    if (axios.isAxiosError(e)) {
      return false;
    }
  }

  return false;
};
