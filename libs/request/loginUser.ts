import axios, { AxiosResponse } from 'axios';
import { clientRoot, config } from '@const/apiRequest';

export interface UserDataLogin {
  readonly code: number;
  readonly password: string;
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
    config.headers.Authorization = `Bearer ${accessToken}`;

    return response.status === 200 || response.status === 201;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return false;
    }
  }

  return false;
};
