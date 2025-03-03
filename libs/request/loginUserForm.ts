import { AxiosResponse } from 'axios';
import { clientRoot, config } from '@const/apiRequest';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';
import { UserDataLogin } from '@const/RequestProfile';

export const loginUserForm = async (
  user: UserDataLogin,
  setAuthToken: (token: string) => void,
) => {
  try {
    const params = new URLSearchParams();
    params.append('username', `${user.code}`);
    params.append('password', `${user.password}`);

    const response: AxiosResponse = await clientRoot.post(
      `/auth/`,
      params,
      config,
    );
    const accessToken = response.data.access_token;

    setAuthToken(accessToken);
    config.headers.Authorization = `Bearer ${accessToken}`;

    return response.status === 200 || response.status === 201;
  } catch (e) {
    showAxiosExceptionMessage(e);
  }

  return false;
};
