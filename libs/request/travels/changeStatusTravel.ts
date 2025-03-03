import { AxiosResponse } from 'axios';
import { clientTravelMatchNetwork, config } from '@const/apiRequest';
import { showAxiosExceptionMessage } from '@libs/toast/showAxiosExceptionMessage';

export type StatusMode = 'start' | 'finished' | 'cancel';

export const changeStatusTravel = async (mode: StatusMode, uuid: string) => {
  try {
    const response: AxiosResponse = await clientTravelMatchNetwork.patch(
      `/schedule/${mode}/${uuid}`,
      {},
      config,
    );

    return response.status === 200 || response.status === 201;
  } catch (e) {
    console.error(e);

    showAxiosExceptionMessage(e);
  }

  return false;
};
