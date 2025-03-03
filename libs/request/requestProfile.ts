import { AxiosResponse } from 'axios';
import { clientUserManagement, config } from '@const/apiRequest';
import RequestProfile, { getRoleFromRequest } from '@const/RequestProfile';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';

export const requestProfile = async (
  setProfile: (date: RequestProfile) => void,
) => {
  try {
    const response: AxiosResponse = await clientUserManagement.get(
      `/profile/`,
      config,
    );

    const data = response.data;

    setProfile({
      userCode: data.code,
      firstName: data.firstname,
      maternalSurname: data.maternalSurname,
      paternalSurname: data.paternalSurname,
      email: data.email,
      role: getRoleFromRequest(data.role),
    });

    return response.status === 200 || response.status === 201;
  } catch (e) {
    console.error(e);

    showAxiosExceptionMessage(e);
  }

  return false;
};
