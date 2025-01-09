import axios, { AxiosResponse } from 'axios';
import { clientRoot, config } from '@const/apiRequest';

export const checkToken = async () => {
  try {
    const response: AxiosResponse = await clientRoot.post(
      `/auth/check`,
      {},
      config,
    );

    return response.status === 200 && response.data.status === true;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return false;
    }
  }

  return false;
};
