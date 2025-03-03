import { AxiosResponse } from 'axios';
import { clientRoot, config } from '@const/apiRequest';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';

export const requestValidationToken = async () => {
  try {
    const response: AxiosResponse = await clientRoot.post(
      `/auth/check`,
      {},
      config,
    );

    return response.status === 200 && response.data.status === 'success';
  } catch (e) {
    showAxiosExceptionMessage(e);
  }

  return false;
};
