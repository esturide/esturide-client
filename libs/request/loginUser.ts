import axios, { AxiosResponse } from 'axios';
import { clientRoot, config } from '@const/apiRequest';

export interface UserDataLogin {
  code: string;
  password: string;
}

export const loginUser = async (
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

    return response.status === 200;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e;
    }
  }

  return false;
};
